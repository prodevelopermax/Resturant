import React from 'react';
import { images } from '../../constants';

import './Chef.css';

// const Chef = () => (
//   <div className='app__bg app__wrapper margin__padding'>
   
//    <div className="app__wrapper_img app__wrapper_img-reverse">
//       <img src={images.chef} alt="chef_image" className='image.chef' />
//     </div>
   
  
//   <div className='app__wrapper-info'>
//    <p>Chef Words</p>
//    <img src={images.spoon} alt="spoons.image" className='images.spoon' />
//    <h1 className="headtext__cormorant">What we believe in</h1>
//    </div>
//   <div className='app__chef-content'>
//     <div className='app__chef-content_quote'>
//     <img src={images.quote} alt="images.quote"  className='images.quote'/>
//     <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis est</p>
//     </div>
//     <p className='p__opensans'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente nobis repellendus iure ad eos eaque placeat nostrum laudantium hic.</p>
//   </div>
//   <div className='app__chef-sign'>
//     <p>Kevin Luo</p>
//     <p className='p__opensans'>Chef & Founder</p>
//     <img src={images.sign} alt="images.sign"  className='images.sign'/>
//   </div>
  
//   </div>
// )


// export default Chef;
const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
    <p className='chef-words'>Chef Words</p>
      <img src={images.spoon} alt="spoons.image" className='images.spoon' />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Lorem ipsum dolor , consectetur adipiscing elit auctor sit .</p>
        </div>
        <p className="p__opensans"> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
