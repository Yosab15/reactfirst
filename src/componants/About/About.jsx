import Navbar from '../Navbar/Navbar'
import './About.css'
import React, { Component, useEffect } from 'react'


export default class About extends Component {
  
  
  render() {
    return <> 
      {/* <Navbar/> */}
        <div className="about">
          <div className="inner text-center">
          <div className="head d-flex justify-content-center align-items-center p-5 position-relative">
          <h1 className='text-white '>ABOUT COMPONENT <br />
          <div className="head-ico ">
          <i className='fa fa-star'/>
          </div></h1>
          </div>
          </div>
          <div className="container">
          <div className="row d-flex justify-content-center align-items-center ">
              <div className="col-md-6">
                <p>
                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                </p>
              </div>
              <div className="col-md-6">
                <p>
                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                </p>
              </div>
          </div>
          </div>
             
        </div>
        
    </>
  }
}
