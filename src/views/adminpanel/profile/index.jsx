import React, { useEffect } from 'react';
import './style.css';
import AdminLayout from '../../../components/admin-components/layout';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../../Redux/actions/user.action';
import {FaUserEdit} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
function Profile() {
    const dispatch=useDispatch();
    const {user} = useSelector(state=>state.User);
    const navigate=useNavigate();
    useEffect(()=>{
        dispatch(getUser());
    },[])
  return (
   <>
   <AdminLayout>
        <div className="user-profile-container">
            <div className="user-profile-wrapper flex flex-column">
                <div className="profile-upper">
                    <div className="profile-img-box">
                        <img src={`http://localhost:5000/public/${user.empPic}`} alt="" />
                    </div>
                </div>
                <div className="profile-lower">
                    <div className="profile-detail flex flex-column">
                        <div className="user-name flex flex-column flex-justify-center flex-items-center">
                        <h3>{user.fullname}</h3>
                        <button onClick={()=>navigate('/editprofile')}><FaUserEdit/> Edit</button>
                        </div>
                        <div className="profile-other-detail flex flex-column">
                            <div className="flex-row flex flex-justify-sa">
                            <p><b>Username:</b> <span>{user.username}</span></p>
                            <p><b>Email:</b> <span>{user.email}</span></p>
                            </div>
                            <div className="flex-row flex flex-justify-sa">
                            <p><b>Phone:</b> <span>{user.phone}</span></p>
                            <p><b>CNIC:</b> <span>{user.cnic}</span></p>
                            </div>
                            <div className="flex-row flex flex-justify-sa">
                            <p><b>City:</b> <span>{user.city}</span></p>
                            <p><b>Province:</b> <span>{user.province}</span></p>
                            </div>
                           <div className="flex-row flex flex-justify-sa">
                           <p><b>Permanet Address:</b> <span>{user.permanentAddress}</span></p>
                            <p><b>Status:</b> <span>{user.active ? <><span style={{color:'green'}}>Active</span></> : <><span style={{color:'red'}}>Deactive</span></>}</span></p>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </AdminLayout>
   </>
  )
}

export default Profile