import { useEffect, useState, useTransition } from 'react'
import './styles.css'
import { useDictionary } from '../hooks/useDictionary'
import { Node, getWords, addWord} from '../hooks/trie'

const LIST_SIZE = 10000

const Autocomplete = ({limit}) => {
    const [text, setText] = useState('')
    const [list, setList] = useState([])
    const [isPending, startTransition] = useTransition()
    const words = useDictionary();
    const [trie, setTrie] = useState(new Node())

    useEffect(() => {
        if (!words.length) return

        console.log(words.length)
        for (let i =0; i<words.length; i++) {
            addWord(words[i], trie, limit)
        }
    }, [words])


    //debounce render list
    // useEffect(()=> {
    //     const timerId = setTimeout(()=> {
    //         const newList = new Array(LIST_SIZE).fill(text)
    //         setList(newList)
    //     }, 500)

    //     return () => clearTimeout(timerId)
    // }, [text])

    //change with useTransition
    const handleChange = ({target}) => {
        // console.log(target)
        // console.log(target.value)
        setText(target.value)

        startTransition(() => {
            const newList = getWords(target.value, trie, limit)
            setList(newList)
        })
    }

    //raw change without optimizations
    // const handleChange = ({target}) => {
    //     // console.log(target)
    //     // console.log(target.value)
    //     setText(target.value)

    //     const newList = new Array(LIST_SIZE).fill(target.value)
    //     setList(newList)
    // }
    

    return (
        <div className='search-container'>
            <div className='search-input'>
                <input type='text' value={text} onChange={handleChange}></input>
                <button >Search</button>
            </div>

        {text &&    <div className='suggestions'>

            {isPending ? 'Loading...' :
                list.map((el,i) => (
                    <div key={i}>{el}</div>
                ))
            }
            </div>
        }
        </div>
    )
}

export default Autocomplete