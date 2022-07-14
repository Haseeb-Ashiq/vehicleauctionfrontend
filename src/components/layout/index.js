import React from 'react'
import Navbar from '../navbar'
import './layout.css';
function Layout(props) {
  return (
      <>
       <div className="circle-one"></div>
    <div className="circle-two"></div>
    <div className="container">
       <Navbar/>
         <div className="main">
             {props.children}
         </div>
         </div>
         </>
  )
}

export default Layout