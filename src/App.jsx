import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router';
import './App.css';
import Home from './pages/Home/Home';
import AllCompo from './Layout/allCompo';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Home></Home>}>
        <Route path="/" element={<AllCompo></AllCompo>}></Route>
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
