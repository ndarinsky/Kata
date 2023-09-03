import { useEffect, useState, useMemo } from 'react'
import Images from './Images'
import Paginator from './Paginator'

const API = `https://api.api-ninjas.com/v1/randomimage?category=nature`
const MAX_IMAGES = 10
const VISIBLE_IMAGES = 3
const visibleSection = new Array(VISIBLE_IMAGES).fill(0)

const Carousel = ({}) => {
  const [images, setImages] = useState([])
  const [main, setMain] = useState(0)
  let data = visibleSection.map((_,i) => {
    const index = (main + i)%MAX_IMAGES
    return images[index]
  })

  console.log(main)

/*Download images using async await syntax:*/
  useEffect(() => {
    (async () => {
        console.log(`load images start`)
        
        const promises = new Array(10).fill(0).map(async (el, i) => {
        const response = await fetch(API, {
            mode: 'cors',
            headers: { 
            "X-Api-Key": 'mWYX84dv/Fddm7erxcCjxg==Cfm8z0OsZza4RTQs',
            'Accept': 'image/jpg'
            }
        })
        return response.blob()
        })

        const result = await Promise.allSettled(promises)
        const randImages = result.map(p => URL.createObjectURL(p.value))
        setImages(randImages)

        console.log(`load images end`)
    })()
  }, [])

//   console.log(`render`)
  return <div className='carousel'>
    <Paginator main={main} setMain={setMain}>
        <Images data={data}/>
    </Paginator>
  </div>
}

export default Carousel
