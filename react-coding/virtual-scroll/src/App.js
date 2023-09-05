import './App.css';
import ScrolledContainer from './components/ScrolledContainer'
import React, { useEffect, useState, useRef, useCallback } from "react";

const LIMIT = 30
const TOTAL_ITEMS_IN_DOM = LIMIT*3

const getData = async (offset, count) => {
  await setTimeout(() => {}, 1000)
  return new Array(count).fill(0).map((_,i) => `item ` + Math.floor(Math.random()*100000))
}

function App() {
  const [posts, setPosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(LIMIT)

  const topAnchor = useRef()
  const bottomAnchor = useRef()

  useEffect(() => {
    (async () => {
      const chunk = await getData(0, TOTAL_ITEMS_IN_DOM)
      setPosts(chunk)
    })()
  }, [])

  useEffect(() => {
    const topObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting){
            // console.log('top anchor')
        }
    })
    topObserver.observe(topAnchor.current)
    
    const bottomObserver = new IntersectionObserver(async (entries) => {
        if (entries[0].isIntersecting && posts.length){ //don't trigger on 1st render
          const onBottomAnchor = async () => {
            const chunk = await getData(currentIndex, LIMIT)
            const newPosts = posts.concat(chunk)
            setPosts(newPosts)
            console.log(newPosts.length)
          }     

          await onBottomAnchor()
        }
    })
    bottomObserver.observe(bottomAnchor.current)

    return () => {
        topObserver.unobserve(topAnchor.current)
        bottomObserver.unobserve(bottomAnchor.current)
    }
}, [posts])

  const onTopAnchor = () => {
    // console.log(posts)
  }


  console.log(`render`)

  return (
    <div className="App">
        <div className='scrolled-container'>
            Scrolled Container
            <div className='anchor' ref={topAnchor}></div>
            <div className='scrolled-container__list'>
                { posts.map((post, i) => <div key={currentIndex+i}>{currentIndex+i}) {post}</div>) }
            </div>
            <div className='anchor' ref={bottomAnchor}></div>
        </div>
    </div>
  );
}

export default App;
