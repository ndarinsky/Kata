import './App.css';
import ScrolledContainer from './components/ScrolledContainer'
import React, { useEffect, useState, useRef, useCallback } from "react";

const LIMIT = 20
const TOTAL_ITEMS_IN_DOM = LIMIT*2

const getData = async (offset, count) => {
  await setTimeout(() => {}, 1000)
  return new Array(count).fill(0).map((_,i) => `item ` + Math.floor(Math.random()*100000))
}

function App() {
  const [posts, setPosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(LIMIT)
  const [topPlaceholder, setTopPlaceholder] = useState(0)

  const topAnchor = useRef()
  const bottomAnchor = useRef()
  const scrollRef = useRef()

  useEffect(() => {
    (async () => {
      const chunk = await getData(0, TOTAL_ITEMS_IN_DOM)
      setPosts(chunk)
    })()
  }, [])

  useEffect(() => {
    const bottomObserver = new IntersectionObserver(async (entries) => {
        if (entries[0].isIntersecting && posts.length){ //don't trigger on 1st render
          const onBottomAnchor = async () => {
            const chunk = await getData(currentIndex+LIMIT, LIMIT)
            
            const newPosts = [...posts, ...chunk].slice(LIMIT)

            setPosts(newPosts)
            setCurrentIndex(prev => prev + LIMIT)

            console.log(newPosts.length)
          }     

          await onBottomAnchor()
        }
    })
    bottomObserver.observe(bottomAnchor.current)

    return () => {
        bottomObserver.unobserve(bottomAnchor.current)
    }
}, [posts])

  return (
    <div className="App">
        <div className='scrolled-container'>
            Scrolled Container
            <div className='anchor' ref={topAnchor}></div>
            <div className='scrolled-container__list' >
              <div className='relat' style={{ top: (currentIndex-LIMIT)*10+'px'  }}>
                { posts.map((post, i) => <div className='item' key={currentIndex-LIMIT+i}> {currentIndex+i}) {post}</div>) }
                <div className='anchor' ref={bottomAnchor}></div>
              </div>
            </div>
            
        </div>
    </div>
  );
}

export default App;
