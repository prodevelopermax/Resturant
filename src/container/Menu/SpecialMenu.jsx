
// import React from 'react';
// import { images } from '../../constants';


// import './SpecialMenu.css';

// const menuItems = [
//   {
//     name: 'Burger Meal',
//     country: 'AU',
//     type: 'Meal',
//     price: '$56',
//   },
//   {
//     name: '3x Pizza Deal',
//     country: 'AU',
//     type: 'Deal',
//     price: '$59',
//   },
//   {
//     name: 'Kebab Meal',
//     country: 'FR',
//     type: 'Deal',
//     price: '$44',
//   },
//   {
//     name: 'Shawarma',
//     country: 'CA',
//     type: 'Meal',
//     price: '$31',
//   },
//   {
//     name: 'Donner Roll',
//     country: 'IE',
//     type: 'Meal',
//     price: '$26',
//   },
// ];

// const drinks = [
//   {
//     name: 'Coca Cola',
//     details: 'Free With A Meal | Soda | 30 MI',
//     price: '$20',
//   },
//   {
//     name: 'Pepsi',
//     details: 'Free With A Meal | Soda | 30 MI',
//     price: '$16',
//   },
//   {
//     name: 'Water',
//     details: 'Free With A Meal | 30 MI',
//     price: '$10',
//   },
//   {
//     name: 'Rio',
//     details: 'Free With A Meal | Soda | 30 MI',
//     price: '$26',
//   },
// ];

// const SpecialMenu = () => (
 
//     <div className="special-menu">
//       <div className="special-menu__container">
//         <h2 className="special-menu__title">Today's Special</h2>
//         <div className="special-menu__content">
//           {/* <div className="special-menu__meals"> */}
//             <ul className="special-menu__list">
//               {menuItems.map((item) => (
//                 <li key={item.name} className="special-menu__item">
//                   <span className="special-menu__item-name">{item.name}</span>
//                   <span className="special-menu__item-details">
//                     {item.country} | {item.type}
//                   </span>
//                   <span className="special-menu__item-price">{item.price}</span>
//                 </li>
//               ))}
//             </ul>
//           {/* </div> */}
//           {/* <div className="special-menu__image"> */}
//             {/* Replace with your actual image */}
//             <img src={images.gallery03} alt="menu__img" className='images-menu' />
//             <button className="special-menu__button">View More</button>
//           {/* </div> */}
//           {/* <div className="special-menu__drinks"> */}
//             <h3 className="special-menu__subtitle">Drinks</h3>
//             <ul className="special-menu__list">
//               {drinks.map((drink) => (
//                 <li key={drink.name} className="special-menu__item">
//                   <span className="special-menu__item-name">{drink.name}</span>
//                   <span className="special-menu__item-details">{drink.details}</span>
//                   <span className="special-menu__item-price">{drink.price}</span>
//                 </li>
//               ))}
//             </ul>
//           {/* </div> */}
//         </div>
//       </div>
//     </div>
//   );


// export default SpecialMenu;

import React from 'react';
import './SpecialMenu.css';
import { images } from '../../constants'; // Assuming you have an images file for the burger image

const menuItems = [
  { name: 'Burger Meal', country: 'AU', type: 'Meal', price: '$56' },
  { name: '3x Pizza Deal', country: 'AU', type: 'Deal', price: '$59' },
  { name: 'Kebab Meal', country: 'FR', type: 'Deal', price: '$44' },
  { name: 'Shawarma', country: 'CA', type: 'Meal', price: '$31' },
  { name: 'Donner Roll', country: 'IE', type: 'Meal', price: '$26' },
];

const drinks = [
  { name: 'Coca Cola', details: 'Free With A Meal | Soda | 30 MI', price: '$20' },
  { name: 'Pepsi', details: 'Free With A Meal | Soda | 30 MI', price: '$16' },
  { name: 'Water', details: 'Free With A Meal | 30 MI', price: '$10' },
  { name: 'Water', details: 'Free With A Meal | 30 MI', price: '$31' },
  { name: 'Rio', details: 'Free With A Meal | Soda | 30 MI', price: '$26' },
];

const SpecialMenu = () => {
  return (
    <div className="menu">
      <p className='pallete'>Menu that fits your pallete</p>
      <img src={images.spoon} alt="images.spoon"  className='images.spoon'/>
      <h1 className="menu__title">Today's Special</h1>
      <div className="menu__container">
        {/* Meals Section */}
        <div className="menu__section menu__section--meals">
          <h2 className="menu__heading">Meals</h2>
          <ul className="menu__list">
            {menuItems.map((item) => (
              <li className="menu__item" key={item.name}>
                <span className="menu__item-name">{item.name}</span>
                <span className="menu__item-details">
                  {item.country} | {item.type}
                </span>
                <span className="menu__item-price">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Center Image */}
        <div className="menu__image-container">
          <img className="menu__image" src={images.gallery03} alt="Burger Special" />
          <button className="menu__button">View More</button>
        </div>

        {/* Drinks Section */}
        <div className="menu__section menu__section--drinks">
          <h2 className="menu__heading">Drinks</h2>
          <ul className="menu__list">
            {drinks.map((drink) => (
              <li className="menu__item" key={drink.name}>
                <span className="menu__item-name1">{drink.name}</span>
                <span className="menu__item-details1">{drink.details}</span>
                <span className="menu__item-price1">{drink.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SpecialMenu;

