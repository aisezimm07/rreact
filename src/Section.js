import img from './images/image.png'
import imag from './images/frame.png'

function Section(){
   
    return(

        <div className="section1">
            <div className="text">
                <div className='one'>
            <h1><span>I design products</span> <br></br>
            that delight and <br></br> inspire people </h1>
            <img className='image_1' src={img} alt='hello' /> 
            </div>
            <p>Hi I m Jack,a product based in Berlin . I create <br></br>
            user-friendly interfaces for fast growing startups</p>
            <div className="cv">
            <button className="book">Book a Call</button>
             <button className="btn">Download CV</button>
             </div>
            </div>
           <h2>Trusted by</h2>
           <img className='image_2' src={imag} alt='hello' /> 
        </div>
    )
}




export default Section