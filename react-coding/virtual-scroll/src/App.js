import './App.css';
import React, { useEffect, useState, useRef, useCallback } from "react";

const LIMIT = 20
const TOTAL_ITEMS_IN_DOM = LIMIT*2
const ITEM_HEIGHT = 10

const getData = async (offset, count) => {
  await setTimeout(() => {}, 1000)
  return new Array(count).fill(0).map((_,i) => `item ` + Math.floor(Math.random()*100000))
}

function App() {
  const [posts, setPosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0)

  const topAnchor = useRef()
  const bottomAnchor = useRef()

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
            const chunk = await getData(currentIndex, LIMIT)
            
            const newPosts = [...posts, ...chunk].slice(LIMIT)

            setPosts(newPosts)
            setCurrentIndex(prev => prev + LIMIT)
          }     

          await onBottomAnchor()
        }
    })
    bottomObserver.observe(bottomAnchor.current)

    const topObserver = new IntersectionObserver(async (entries) => {
      if (entries[0].isIntersecting && posts.length && currentIndex>=LIMIT){ //don't trigger on 1st render
        const onAnchor = async () => {
          const chunk = await getData(currentIndex+LIMIT, LIMIT)
          const newPosts = [...chunk, ...posts.slice(LIMIT)]

          setPosts(newPosts)
          setCurrentIndex(prev => prev - LIMIT)

        }     

        await onAnchor()
      }
  })
    topObserver.observe(topAnchor.current)

    return () => {
        bottomObserver.unobserve(bottomAnchor.current)
        topObserver.unobserve(topAnchor.current)
    }
}, [posts])

  return (
    <div className="App">
        <div className='scrolled-container'>
            Virtual + Infinite Scrolled List
              <div className='relative' style={{ top: (currentIndex)*ITEM_HEIGHT+'px'  }}> {/*position:relative + top:dynamic to keep height */}
                <div className='anchor' ref={topAnchor}></div> {/** top anchor for intersection observer */}
                { posts.map((post, i) => <div className='item' key={currentIndex+i}> {currentIndex+i}) {post}</div>) }
                <div className='anchor' ref={bottomAnchor}></div>
              </div>
        </div>
    </div>
  );
}

export default App;
