// import React from 'react';
// import {data, images} from '../../constants'

// import './Laurels.css';

// const AwardCard = ({award : {imageUrl , tittle  , subtittle}}) => (
//   <div className='app__laurels_award-cards'>
//     <img src={imageUrl} alt="image-url" />
//     <div className='app__laurels_award-cards_content'>
//       <p className='tittle'>{tittle}</p>
//       <p className='tittle'>{subtittle}</p>

//     </div>
//   </div>
// );
// const Laurels = () => (
//   <div className='app__bg app__wraper section__padding'>
//     <div className='app__wraper-info'>
//     <p className='app__wraper-info-awards' >Awards and recognition</p>
//     <img src={images.spoon} alt="images.spoon"  className='images.spoon'/>
//     <h1 className='headtext__cormorants'>our laurels</h1>
//     <div className='app__laurels_award'>
//     {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
    
//     </div>
//     </div>
//    <div className='app__wraper-image'>
//       <img src={images.laurels} alt="image.laurels"  className='image.laurels'/>
//    </div>
    
//   </div>

// )

// export default Laurels;
// import React from 'react';


// import { images, data } from '../../constants';
// import './Laurels.css';

// const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
//   <div className="app__laurels_awards-card">
//     <img src={imgUrl} alt="awards" className='image.url'/>
//     <div className="app__laurels_awards-card_content">
//       <p className="p__cormorants" style={{ color: '#DCCA87' }}>{title}</p>
//       <p className="p__opensans" style={{color : '#fff'}} >{subtitle}</p>
//     </div>
//   </div>
// );

// const Laurels = () => (
//   <div className="app__bg app__wrapper section__padding" id="awards">
//     <div className="app__wrapper_info">
//       <h3 className='app__wraper-info-awards' style={{color: '#DCCA87' , fontSize: '1rem', fontFamily: 'Cormorant Upright,sans-serif'}}  > "Awards & recognition" </h3>
//       <img src={images.spoon} alt="image.spoon" />
//       <h1 className="headtext__cormorant">Our Laurels</h1>

//       <div className="app__laurels_awards">
//         {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
//       </div>
//     </div>

//     <div className="app__wrapper_img">
//       <img src={images.laurels} alt="laurels_img" />
//     </div>
//   </div>
// );

// export default Laurels;
import React from 'react';


import { images, data } from '../../constants';
import './Laurels.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="awards" className='image.url' />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p__opensans"  >{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
    <h3 className='app__wraper-info-awards' style={{color: '#DCCA87' , fontSize: '1rem', fontFamily: 'Cormorant Upright,sans-serif'}}  > "Awards & recognition" </h3>
      <h1 className="headtext__cormorant">Our Laurels</h1>

      <div className="app__laurels_awards">
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels_img" />
    </div>
  </div>
);

export default Laurels;
