import React from 'react';

import { images } from '../../constants';
import './subheading.css'


const SubHeading = ({ title,discription }) => (
  
  <div className='subheading'>
    <div className='subheading__content'>
      
      <p className="subheading__flavour">Chase The New Flavour</p>
        <img src={images.spoon} alt="spoons__image" className='subheading__spoon' />
        
        <p className="p__cormorant">{title}</p>
      <h1 className='subheading__tittle'>The Key To Fine Dining</h1>
      <p className='subheading__discription'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
      <button className='subheading__button'>Explore Menu</button>
    </div>
     <div className='subheading__image-container'>
      <img src={images.welcome} alt="chef"  className='subheading__image'/>
     </div>
  </div>
);

export default SubHeading;

