import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router';
import './App.css';
import Home from './pages/Home/Home';
import AllCompo from './Layout/allCompo';
import AboutCompo from './pages/components/AboutCompo';
import ServiceCom from './pages/components/servicecom/serviceCom';
import Portfolio from './pages/components/portfolio/Portfolio';
import TestimonialCompo from './pages/components/testimonial/TestimonialCompo';
import Pricing from './pages/components/Pricing/Pricing';
import Acoridon from './pages/components/Acoridon/Acoridon';
import Blog from './pages/allpages/blog/Blog';
import Contact from './pages/components/Contact/Contact';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Home></Home>}>
        <Route path="/" element={<AllCompo></AllCompo>}></Route>
        <Route path="/about" element={<AboutCompo></AboutCompo>}></Route>
        <Route path="/services" element={<ServiceCom></ServiceCom>}></Route>
        <Route path="/works" element={<Portfolio></Portfolio>}></Route>
        <Route path="/pricing" element={<Pricing></Pricing>}></Route>
        <Route path="/fqa" element={<Acoridon></Acoridon>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/404" element={<Contact></Contact>}></Route>
        <Route
          path="/testimonials"
          element={<TestimonialCompo></TestimonialCompo>}
        ></Route>
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
