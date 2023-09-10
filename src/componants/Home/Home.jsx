import Navbar from '../Navbar/Navbar';
import './Home.css';
import avatar from './img/avtar.png';
import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return <>
    <title>Home</title>
    <main className='vh-100 d-flex flex-column justify-content-center align-items-center Homeall text-white'>
    <div className="image mb-4">
      <img src={avatar} alt="" />
    </div>
    <div className="text">
      <h1 className='fw-bold mb-2'>START FRAMEWORK</h1>
      <div className="ico text-center">
      <i className='fa fa-star'/>
      </div>
      
      </div>
      <p className='p-3'>Graphic Artist - Web Designer - Illustrator</p>
    </main>
      </>
    
  }
}
