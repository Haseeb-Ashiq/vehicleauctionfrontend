import React ,{useEffect} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './style.css';
import {useDispatch , useSelector} from 'react-redux';
import {getUser,logOut} from '../../../Redux/actions/user.action';
import {FaPowerOff,FaRegHeart, FaGavel, FaTrophy, FaUserEdit, FaNewspaper} from 'react-icons/fa';
function Sidebar() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const {user,isLogout,isLogingout}=useSelector(state=>state.User);
  useEffect(()=>{
     dispatch(getUser());
  },[])
  return (
   <>
   <div className='side-bar-container'>
     <div className='side-bar-img-sec flex flex-justify-center flex-items-center'>
       <div className='side-img-box'>
       <img src={`http://localhost:5000/public/${user.empPic}`} alt="" />
       </div>
     </div>
     <div className='side-bar-link-sec flex flex-column'>
       <div className='side-links'><button onClick={()=>navigate('/dashboard')}><FaNewspaper/> Dashboard</button></div>
       <div className='side-links'><button onClick={()=>navigate('/wishlist')}><FaRegHeart /> Wish List</button></div>
       <div className='side-links'><button onClick={()=>navigate('/bidonvehicles')}><FaGavel/> Bids on Vehicle</button></div>
       <div className='side-links'><button onClick={()=>navigate('/won-vehicle')}><FaTrophy/> Won</button></div>
       <div className='side-links'><button onClick={()=>navigate('/profile')}><FaUserEdit/> Profile</button></div>
       <div className='side-links'><button onClick={()=>dispatch(logOut())}><FaPowerOff/> {isLogingout ? <>waiting...</> : <>Logout</>}</button></div>
     </div>
   </div>
   </>
  )
}

export default Sidebar