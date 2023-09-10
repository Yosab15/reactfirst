import './Footer.css'
import React, { Component } from 'react'
export default class Footer extends Component {
  render() {
    return <>
    <div className="footer ">
        <div className="Footer-item ">
            <div className="container">
            <div className="row p-5 gy-5 ">
            <div className="col-md-4">
                <div className="card text-center border border-0 ">      
                  <h1>LOCATION</h1>
                  <p>2215 John Daniel Drive</p>
                  <p>Clark, MO 65243</p>
                  </div>
             </div>
             <div className="col-md-4 ">
                <div className="card text-center border border-0">      
                <h1>AROUND THE WEB</h1>
                <div className="cardico p-5">
                <i className="fa-brands fa-facebook" />
                <i className="fa-brands fa-twitter" />
                <i className="fa-brands fa-linkedin" />
                <i className="fa-brands fa-github" />
                </div>
                
                </div>
             </div>
             <div className="col-md-4">
                <div className="card text-center border border-0">      
                <h1>ABOUT FREELANCER</h1>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                
                </div>
             </div>
        </div>
    </div> 
    </div>
    <div className="end text-center">
        <p>Copyright © Your Website 2023 yosab</p>
    </div>
</div>

    </>
  }
}
