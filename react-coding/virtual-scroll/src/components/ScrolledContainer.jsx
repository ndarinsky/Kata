import './styles.css'
import React, { useEffect, useState, useRef } from "react";

const ScrolledContainer = ({children, onTopAnchor, onBottomAnchor, posts}) => {
    const topAnchor = useRef()
    const bottomAnchor = useRef()

    useEffect(() => {
        const topObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting){
                console.log('top anchor')
            }
        })
        topObserver.observe(topAnchor.current)
        
        const bottomObserver = new IntersectionObserver(async (entries) => {
            if (entries[0].isIntersecting){
                console.log('bottom anchor')
                onBottomAnchor()
            }
        })
        bottomObserver.observe(bottomAnchor.current)

        return () => {
            topObserver.unobserve(topAnchor.current)
            bottomObserver.unobserve(bottomAnchor.current)
        }
    }, [posts])

    return (
        <div className='scrolled-container'>
            Scrolled Container
            <div className='scrolled-container__list'>
                <div className='anchor' ref={topAnchor}></div>
                {children}
                <div className='anchor' ref={bottomAnchor}></div>
            </div>

        </div>
    )
}

export default ScrolledContainer