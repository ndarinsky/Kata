const Images = ({data}) => {
return <div className="carousel-images">
    {data.map((src, i) => {
        return (<img src={src} key={i} id={`img-`+i}alt='' className='carousel-img'></img>)
        })
    }
</div>
}

export default Images