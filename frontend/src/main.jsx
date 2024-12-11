
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, BrowserRouter as Router, RouterProvider, Route } from 'react-router-dom';
import { StrictMode } from 'react';
import Home from './pages/Home/Home.jsx';
import Cart from './components/Cart/Cart.jsx';
import Placeorder from './pages/Placeorder/Placeorder.jsx'
import { Provider } from 'react-redux';
import { Store } from './Store/Store.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} >
      <Route path='' element={<Home/>} />
      <Route path='cart' element={<Cart/>} />
      <Route path='order' element={<Placeorder/>} />
    </Route> 
  )
)
createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Provider store={Store}>
        <RouterProvider router={router} />
      </Provider>
    </StrictMode>
)