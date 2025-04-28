import About from '@/pages/allpages/about/About';
import Banner from '@/pages/allpages/banner/Banner';
import Brands from '@/pages/allpages/brands/Brands';
import Testimonials from '@/pages/allpages/testimonial/Testimonials';
import PhotoGrapi from '@/pages/allpages/photgrpi/PhotoGrapi';
import Service from '@/pages/allpages/service/Service';
import Works from '@/pages/allpages/works/Works';
import React from 'react';
import Blog from '@/pages/allpages/blog/Blog';

const AllCompo = () => {
  return (
    <div>
      <Banner />
      <About></About>
      <Brands></Brands>
      <PhotoGrapi></PhotoGrapi>
      <Works></Works>
      <Service></Service>
      <Testimonials></Testimonials>
      <Blog></Blog>
    </div>
  );
};

export default AllCompo;
