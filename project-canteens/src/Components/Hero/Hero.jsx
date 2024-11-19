import hero from '../../assets/hero.png'
import './Hero.css'
const Hero = () => {
  return (
    <>
    <div className="hero">
        <div className="hero-text">
            <h1>
            The taste of traditions's with a modern twist
            </h1>
            <p> 
            Discover a fusion of rich heritage and contemporary flavors. Our dishes bring timeless recipes to life with a creative touch, offering a unique culinary experience that honors the past while embracing innovation.
            </p>
            <div className="btns">
                <button className='fff'>Get Start</button>
                <button className='red'>See our menu</button>
            </div>
        </div>
        <img src={hero} alt="" />
    </div>
    </>
  )
}

export default Hero