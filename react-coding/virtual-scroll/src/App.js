import './App.css';
import ScrolledContainer from './components/ScrolledContainer'
import React, { useEffect, useState, useRef, useCallback } from "react";

const LIMIT = 30
const BUFFER = 20
const TOTAL_ITEMS_IN_DOM = LIMIT*3

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
            
            const newPosts = posts.concat(chunk).slice(LIMIT)

            setPosts([...posts])
            setCurrentIndex(prev => prev + LIMIT)
            const newHeight = topPlaceholder + LIMIT * 15
            setTopPlaceholder(newHeight)
            // scrollRef.current?.scrollIntoView({
            //   behavior: "smooth",
            //   block: "start"
            // })
            console.log(newPosts.length)
            // console.log(newHeight)
          }     

          await onBottomAnchor()
        }
    })
    bottomObserver.observe(bottomAnchor.current)

    return () => {
        bottomObserver.unobserve(bottomAnchor.current)
    }
}, [posts])

  // console.log(`render`)

  return (
    <div className="App">
        <div className='scrolled-container'>
            Scrolled Container
            <div className='anchor' ref={topAnchor}></div>
            <div className='scrolled-container__list' >
                { posts.map((post, i) => <div className='item' key={currentIndex-LIMIT+i}>{currentIndex+i}) {post}</div>) }
            </div>
            <div className='anchor' ref={bottomAnchor}></div>
        </div>
    </div>
  );
}

export default App;
