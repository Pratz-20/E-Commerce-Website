import './Hero.css';
import { Link } from 'react-router-dom';

function handleclick() {
  return( 
    alert("Get Ready to Shop!!")
);
}

export default function Hero() {
  
  
    return (
      <div className="hero">
       <div className="hero_text">
            <p className="heading">Supper value deal </p>
            <p className="heading">On all product</p>
            <p className="subheading">save more with coupone upto 70% off</p>
            <button className='btn' onClick={handleclick}> Shop Now</button>
       </div>
      </div>
    );

}