import {useState} from 'react'

const Checkbox = ({children, text, offset}) => {
    const [icon, setIcon] = useState('')
    const [isOpen, setIsOpen] = useState(true)

    const handleClick = ({target}) => {
        setIsOpen(prev => !prev)
    }

    return (<ul className='node'>
        <li onClick={handleClick}>{isOpen ? '-' : '+'} {text}</li>
        {isOpen && <ul>{children}</ul>}
    </ul>)
}

export default Checkbox