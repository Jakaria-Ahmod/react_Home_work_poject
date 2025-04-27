import React from 'react';
import Nav from '../reosableComponents/nav/Nav';
import { Outlet } from 'react-router';
import Footer from '../reosableComponents/footer/Footer';

const Home = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;
