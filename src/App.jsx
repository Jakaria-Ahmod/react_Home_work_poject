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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Home></Home>}>
        <Route path="/" element={<AllCompo></AllCompo>}></Route>
        <Route path="/about" element={<AboutCompo></AboutCompo>}></Route>
        <Route path="/services" element={<ServiceCom></ServiceCom>}></Route>
        <Route path="/works" element={<Portfolio></Portfolio>}></Route>
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
