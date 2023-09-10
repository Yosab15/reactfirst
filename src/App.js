
import { Component } from 'react';
import About from './componants/About/About';
import Portfolyo from './componants/Portfolyo/Portfolyo';
 import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './componants/Home/Home';
import Contact from './componants/Contact/Contact';
import Layout from './componants/Layout/Layout';




const router = createBrowserRouter([

  {path:'/',element:<Layout/> ,children:[
    {path:'/',element:<Home/>},
    {path:'home',element:<Home/>},
    {path:'about',element:<About/>},
    {path:'portfolyo',element:<Portfolyo/>},
    {path:'contact',element:<Contact/>},
    {path:'*',element:<h1>404</h1>}
]},



])

export class App extends Component{
 state = {
 }
 render(){
  return <>
   <RouterProvider router={router}/>
  </>
}
}
