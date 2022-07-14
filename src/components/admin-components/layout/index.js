import React from 'react'
import Navbar from '../../navbar';
import Sidebar from '../sidebar';
import './style.css';
function AdminLayout(props) {
  return (
   <>
    <div className="circle-one"></div>
    <div className="circle-two"></div>
     <div className='admin-main-container'>
         {/* <Navbar/> */}
          <div className='admin-main flex'>
          <div className='side-bar'>
              <Sidebar/>
          </div>
          <div className='main-content'>
              {props.children}
          </div>
          </div>
     </div>
   </>
  )
}

export default AdminLayout