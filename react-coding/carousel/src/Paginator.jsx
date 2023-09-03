
const scrollOptions = {
    behavior: 'smooth',
    block: 'center',
    inline: 'center',
  };

const Paginator = ({ main, setMain, children }) => {

    const handlePrev = () => {
        document.getElementById(`img-${main-1}`).scrollIntoView(scrollOptions);
        // document.querySelector('.carousel-images').scrollTo({
        //     left: main * 200,
        //     behavior: 'smooth',
        //   });
        setMain(prev => (prev-1>=0) ? prev-1 : 9)
    }

    const handleNext = () => {


        document.getElementById(`img-${main+1}`).scrollIntoView(scrollOptions);
        setMain(prev => (prev+1)%10)
    }
    
    return <div className="carousel-paginator">
        <button alt='Previous' onClick={handlePrev} >Prev</button>
        {children}
        <button alt='Next' onClick={handleNext}>Next</button>
    </div>
}

export default Paginator