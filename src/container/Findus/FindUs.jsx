import React from 'react';
import {images} from '../../constants'
 import './FindUs.css'


const FindUs = () => (
  <div className='app__bg section__padding app__wraper' id='#contact'>
    <div className='app__wrapper-info'>
       <h3 className='contact' style={{color: '#DCCA87' , fontSize: '1rem', fontFamily: 'Cormorant Upright,sans-serif'}} >Contact</h3>
       <img src={images.spoon} alt="image.spoon" />
       <h1 className='headtext__cormorant' style={{marginBottom: '3rem' , fontWeight : 'inherit'}}>Find Us</h1>
       <div className='app__wraper-content'>
       <p className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
        <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>

    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" className='findus' style={{}} />
    </div>
  </div>
);

export default FindUs;
