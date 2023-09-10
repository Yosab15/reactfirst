import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './Layout.css'
import React, { Component } from 'react'

export default class Layout extends Component {
  render() {
    return <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  }
}
