import About from '@/pages/allpages/about/About';
import Banner from '@/pages/allpages/banner/Banner';
import Brands from '@/pages/allpages/brands/Brands';
import PhotoGrapi from '@/pages/allpages/photgrpi/PhotoGrapi';
import React from 'react';

const AllCompo = () => {
  return (
    <div>
      <Banner />
      <About></About>
      <Brands></Brands>
      <PhotoGrapi></PhotoGrapi>
    </div>
  );
};

export default AllCompo;
