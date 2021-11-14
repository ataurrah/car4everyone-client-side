import React from 'react';
import pic1 from './pic1.jpg'
import pic2 from './pic 2.jpg'
import pic3 from './pic 3.jpg'
import { Link } from 'react-router-dom';
import './carsol.css'
const Carosol = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={pic1} className="d-block img w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h3 className='bg-primary text-white'>New car sales in Bangladesh: looking offline, buying online</h3>
     <Link to='/service'><button className='bg-primary text-white'>Read more</button></Link>
      </div>
    </div>
    <div className="carousel-item">
      <img src={pic2} className="d-block img  w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h3  >Find your next car with us</h3>
      <p>Leading online automotive marketplace in Bangladesh</p>
      <Link to='/service'><button className='bg-primary text-white'>Read more</button></Link>
      </div>
    </div>
    <div className="carousel-item">
      <img src={pic3}  className="d-block  img img-fluid w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h3 className='text-danger'>Explore  BANGLADESH </h3>
        <Link to='/service'><button className='bg-primary text-white'>Read more</button></Link>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    );
};

export default Carosol;