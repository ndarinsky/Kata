import './App.css';
import React, { useEffect, useState, useRef } from "react";
import VirtualInfiniteScroll from './components/VirtualInfititeScroll'

const LIMIT = 20
const TOTAL_ITEMS_IN_DOM = LIMIT*2

const getData = async (offset, count) => {
  await setTimeout(() => {}, 1000)
  return new Array(count).fill(0).map((_,i) => `item ` + Math.floor(Math.random()*100000))
}

function App() {
  const [posts, setPosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    (async () => {
      const chunk = await getData(0, TOTAL_ITEMS_IN_DOM)
      setPosts(chunk)
    })()
  }, [])

  //TODO: Implement softUpdate: don't remove items, but update their valued inside to avoid reflows
  //load new chunk of data and attach it in the end
  const onBottomAnchor = async () => {
    const chunk = await getData(currentIndex, LIMIT)
    const newPosts = [...posts, ...chunk].slice(LIMIT)

    setPosts(newPosts)
    setCurrentIndex(prev => prev + LIMIT)
  }  

  //load new chunk of data and attach it in the beginning
  const onTopAnchor = async () => {
    const chunk = await getData(currentIndex+LIMIT, LIMIT)
    const newPosts = [...chunk, ...posts.slice(LIMIT)]

    setPosts(newPosts)
    setCurrentIndex(prev => prev - LIMIT)
  } 

  return (
    <div className="App">
        <VirtualInfiniteScroll 
          currentIndex = {currentIndex} 
          posts={posts} 
          onBottomAnchor={onBottomAnchor} 
          onTopAnchor={onTopAnchor}>
          { posts.map((post, i) => <div className='item' key={currentIndex+i}> {currentIndex+i}) {post}</div>) }
        </VirtualInfiniteScroll>
    </div>
  );
}

export default App;
