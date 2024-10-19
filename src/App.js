import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Intro , Laurels , SpecialMenu } from './container';
import { Navbar , SubHeading , } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <SubHeading/>
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    
    <FindUs />
    <Footer />
  </div>
);

export default App;
