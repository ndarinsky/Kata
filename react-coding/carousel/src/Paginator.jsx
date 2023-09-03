
const scrollOptions = {
    behavior: 'smooth',
    block: 'center',
    inline: 'center',
  };

const Paginator = ({ main, setMain, children }) => {

    const handlePrev = () => {

        const nextIndex = main-1 > 0 ? main-1 : 9
        document.getElementById(`img-0`).scrollIntoView(scrollOptions);

        setMain(nextIndex)
    }

    const handleNext = () => {
        const nextIndex = (main+1)%10

        document.getElementById(`img-2`).scrollIntoView(scrollOptions);
        setMain(nextIndex)
    }
    
    return <div className="carousel-paginator">
        <button alt='Previous' onClick={handlePrev} >Prev</button>
        {children}
        <button alt='Next' onClick={handleNext}>Next</button>
    </div>
}

export default Paginator