  import one from './images/one.png'
  import two from './images/two.png'
  import three from './images/three.png'





function Sectionn(){
    return(
        <div className="sectionn">
            <h1 className="ser">SERVICES</h1>
            <h1 className="des">Design that solves problems, <br></br>
                one product at time.
            </h1>
            <div className="flex">
                <div>
                <img className='image_3' src={one} alt='hello' /> 
                    <h3>What I can do for you</h3>
                    <p>Faster,better products that your <br></br>
                    users love .Here's all the services I <br></br>
                    provide:</p>
                  <ul>
                   <li>Sketch</li>
                   <li>Figma</li>
                   <li>WebFlow</li>
                  </ul>
                </div>
                <div>
                <img className='image_4' src={two} alt='hello' /> 
                    <h3>What I can do for you</h3>
                    <p>Faster,better products that your <br></br>
                    users love .Here's all the services I <br></br>
                    provide:</p>
                  <ul>
                   <li>Sketch</li>
                   <li>Figma</li>
                   <li>WebFlow</li>
                  </ul>
                </div>
                <div>
                <img className='image_5' src={three} alt='hello' /> 
                    <h3>What I can do for you</h3>
                    <p>Faster,better products that your <br></br>
                    users love .Here's all the services I <br></br>
                    provide:</p>
                  <ul>
                   <li>Sketch</li>
                   <li>Figma</li>
                   <li>WebFlow</li>
                  </ul>
                </div>
            </div>
        </div>
    )
}


export default Sectionn 