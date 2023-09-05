import React, { useEffect, useRef } from "react";

const LIMIT = 20
const ITEM_HEIGHT = 10

/**
 * There is anchor at the bottom of the list.
 * We observe it via intersection observer, and when anchor becom visible
 * It means that we reached end of the list and we should fetch more data.
 * We also change position of the visible window inside scrollable container, to preserve correct scroll position.
 */
const VirtualInfiniteScroll = ({children, currentIndex, posts, onBottomAnchor, onTopAnchor}) => {
  const topAnchor = useRef()
  const bottomAnchor = useRef()

  useEffect(() => {
    const bottomObserver = new IntersectionObserver(async (entries) => {
        if (entries[0].isIntersecting && posts.length){ //don't trigger on 1st render
          await onBottomAnchor()
        }
    })
    bottomObserver.observe(bottomAnchor.current)

    const topObserver = new IntersectionObserver(async (entries) => {
      if (entries[0].isIntersecting && posts.length && currentIndex>=LIMIT){ //don't trigger on 1st render
        await onTopAnchor()
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
                { children }
                <div className='anchor' ref={bottomAnchor}></div>
              </div>
        </div>
    </div>
  );
}

export default VirtualInfiniteScroll