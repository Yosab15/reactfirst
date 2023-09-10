import './Contact.css'
import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'

export default class Contact extends Component {
  render() {
    return <>
    <div className="contact p-5">
      <div className="contact-head text-center text-black">
      <h1>CONATCT SECTION</h1>
      <i className='fa fa-star'/></div>
<div className="contact-info p-5">
    <div className="container d-flex justify-content-center w-50 p-3 inputs">
      <input type="text" className="form-control border-0 border-bottom " placeholder="user name" />
      </div>
      <div className="container d-flex justify-content-center w-50 p-3 inputs">
      <input type="text" className="form-control border-0 border-bottom" placeholder="user age" />
      </div>
      <div className="container d-flex justify-content-center w-50 p-3 inputs">
      <input type="text" className="form-control border-0 border-bottom" placeholder="user emil" />
      </div>
      <div className="container d-flex justify-content-center w-50 p-3 inputs">
      <input type="text" className="form-control border-0 border-bottom position-relative" placeholder="user password" />
      </div>
      <div className="buttom container w-50 p-3 ">
      <button type="button" className="btn btn-success btn1">send massage</button>
      </div>
      </div>
    </div>
    </>
  }
}
