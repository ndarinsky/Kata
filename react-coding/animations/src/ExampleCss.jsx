import { useRef, useState } from 'react'

const ExampleCss = ({}) => {
    const wrapperRef = useRef()
    const [left, setLeft] = useState(0)
    const [top, setTop] = useState(0)

    const handleClick = () => {
        const wrapper = wrapperRef.current
        wrapper.classList.toggle('is-nav-open')
        console.log(`click`)
    }

    return (<div > 
            <button onClick={handleClick} >Run</button>
            <button onClick={()=> setLeft(prev => prev-50)} >Left</button>
            <button onClick={()=> setLeft(prev => prev+50)} >Right</button>
            <button onClick={()=> setTop(prev => prev-50)} >Up</button>
            <button onClick={()=> setTop(prev => prev+50)} >Down</button>
            <div ref={wrapperRef} className='wrapper' style={{ 'margin-left': left+'px', 'margin-top': top+'px' }}></div>
        </div>
    )
}

export default ExampleCss