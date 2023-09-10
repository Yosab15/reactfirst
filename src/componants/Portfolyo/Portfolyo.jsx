import './Portifolyo.css'
import React, { Component } from 'react'
import poert from './img/poert1.png'
import poert2 from './img/port2.png'
import poert3 from './img/port3.png'

export default class Portfolyo extends Component {

showlayer2 = () => {
  document.querySelector('.layer2').classList.remove('d-none')
  document.querySelector('.layer2').classList.add('d-flex')
}
hidelayer2 = () => {
  document.querySelector('.layer2').classList.remove('d-flex')
  document.querySelector('.layer2').classList.add('d-none')
}
  slectimg = (e) => {
    let img = e.target.parentElement.parentElement.querySelector('img').src
    console.log(img);
    document.querySelector('.innerdev').innerHTML = `<img src="${img}" className="img-fluid" alt=""/>`
    this.showlayer2()
    this.windowclick()
  }
  windowclick = () => {
    window.addEventListener('click', (e) => {
      if (e.target.classList.contains('layer2')) {
        this.hidelayer2()
      }
    })
  }
  render() {
    return <>
      <div className="por p-2">
        <div className="por-head text-center text-black">
                <h1 className=' fw-bold'>PORTFOLIO COMPONENT</h1>
                <i className='fa fa-star'/>
        </div>
        <div className="container">
            <div className="row gy-5">
              <div className="col-md-4">
                <div className="card overflow-hidden position-relative" onClick={this.slectimg}> 
                  <img src={poert} className=" img-fluid rounded-3" alt="..."/>
                  <div className="layer position-absolute d-flex justify-content-center align-items-center text-white">
                    <i className="fa-solid fa-plus fa-6x"/>
                  </div>
                </div> 
              </div>
              <div className="col-md-4">
                <div className="card overflow-hidden position-relative" onClick={this.slectimg}>      
                  <img src={poert2} className=" img-fluid rounded-3" alt="..."/>
                  <div className="layer position-absolute d-flex justify-content-center align-items-center text-white">
                    <i className="fa-solid fa-plus fa-6x"/>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card overflow-hidden position-relative " onClick={this.slectimg}>      
                  <img src={poert3} className=" img-fluid rounded-3" alt="..."/>
                  <div className="layer position-absolute d-flex justify-content-center align-items-center text-white">
                    <i className="fa-solid fa-plus fa-6x"/>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card overflow-hidden position-relative " onClick={this.slectimg}>      
                  <img src={poert} className=" img-fluid rounded-3" alt="..."/>
                  <div className="layer position-absolute d-flex justify-content-center align-items-center text-white">
                    <i className="fa-solid fa-plus fa-6x"/>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card overflow-hidden position-relative " onClick={this.slectimg}>      
                  <img src={poert2} className=" img-fluid rounded-3" alt="..."/>
                  <div className="layer position-absolute d-flex justify-content-center align-items-center text-white">
                    <i className="fa-solid fa-plus fa-6x"/>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card overflow-hidden position-relative " onClick={this.slectimg}>      
                  <img src={poert3} className=" img-fluid rounded-3" alt="..."/>
                  <div className="layer position-absolute d-flex justify-content-center align-items-center text-white">
                    <i className="fa-solid fa-plus fa-6x"/>
                  </div>
                </div>
              </div>
            </div>
        </div>    
      </div>  
      <div className="layer2 z-3 d-none d-flex justify-content-center align-items-center position-fixed bg-primary bg-opacity-25 top-0 bottom-0 start-0 end-0">
        <div className="innerdev">
          <img src={poert} alt="" />
      </div>
      </div>
    </>
  }
}
