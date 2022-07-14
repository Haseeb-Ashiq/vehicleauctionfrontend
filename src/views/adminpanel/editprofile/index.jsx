import React, { useEffect, useState } from 'react';
import './style.css';
import { useDispatch, useSelector } from 'react-redux'
import AdminLayout from '../../../components/admin-components/layout'
import { getUser, userUpdate } from '../../../Redux/actions/user.action';
import {FaCamera} from 'react-icons/fa';
import loader from '../../../images/loading.gif';
import { toast, ToastContainer } from 'react-toastify';
function EditProfile() {
    const dispatch=useDispatch();
    const {user,isUpdating,isUpdated,updatedUser} = useSelector(state=>state.User);
    const [fullname,setFullName]=useState(user.fullname);
    const [username,setUserName]=useState(user.username);
    const [email,setEmail]=useState(user.email);
    const [phone,setPhone]=useState(user.phone);
    const [cnic,setCNIC]=useState(user.cnic);
    const [city,setCity]=useState(user.city);
    const [province,setProvince]=useState(user.province);
    const [pernamentAddress,setPermanentAddress]=useState(user.pernamentAddress);
    const [img,setImg]=useState(`http://localhost:5000/public/${user.empPic}`);
    const [imgFile,setImgFile]=useState('');
    let img_file=document.querySelector('#img-file');
    useEffect(()=>{
        dispatch(getUser());
    },[])
    const imageWindowHandler=()=>{
        img_file.click();
    }
    const imgUploader=(e)=>{
        setImgFile(e.target.files[0]);
        setImg(URL.createObjectURL(e.target.files[0]));
    }
    const update=(e)=>{
        e.preventDefault();
        const form=new FormData();
        form.append('fullname',fullname);
        form.append('username',username);
        form.append('email',email);
        form.append('phone',phone);
        form.append('cnic',cnic);
        form.append('city',city);
        form.append('permanentAddress',pernamentAddress);
        form.append('userPicture',imgFile);
        dispatch(userUpdate({obj:form,id:user._id}))
    }
    const message=()=>{

       isUpdated && toast.success('Updated Successfully!');
    }
  return (
    <AdminLayout>
        {
            isUpdating && <><img src={loader}/></>
        }
        <form onSubmit={update} encType="multipart/form-data">
        <div className="edit-profile-container flex flex-column flex-justify-center flex-items-center">
            <div className="container-row flex flex-row flex-wrap">
                <div className="container-column flex-50">
                    <div className="edit-profile-img-box">
                        <img src={img} alt="" />
                        <div onClick={imageWindowHandler} className="img-taker flex flex-justify-center flex-items-center"><FaCamera/></div>
                    </div>
                    <input type={'file'} id="img-file" onChange={imgUploader} hidden/>
                </div>
            </div>

            <div className="container-row flex flex-row flex-wrap">
                <div className="container-column flex-50">
                    <input text={'text'} value={fullname} onChange={(e)=>setFullName(e.target.value)}/>
                </div>
                <div className="container-column flex-50">
                <input text={'text'} value={username} onChange={(e)=>setUserName(e.target.value)}/>
                </div>
            </div>

            <div className="container-row flex flex-row flex-wrap">
                <div className="container-column flex-50">
                    <input text={'email'} value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="container-column flex-50">
                <input text={'text'} value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                </div>
            </div>

            <div className="container-row flex flex-row flex-wrap">
                <div className="container-column flex-50">
                    <input text={'text'} value={cnic} onChange={(e)=>setCNIC(e.target.value)}/>
                </div>
                <div className="container-column flex-50">
                <input text={'text'} value={city} onChange={(e)=>setCity(e.target.value)}/>
                </div>
            </div>

            <div className="container-row flex flex-row flex-wrap">
                <div className="container-column flex-50">
                    <input text={'text'} value={province} onChange={(e)=>setProvince(e.target.value)}/>
                </div>
                <div className="container-column flex-50">
                <input text={'text'} value={pernamentAddress} onChange={(e)=>setPermanentAddress(e.target.value)} multiple/>
                </div>
            </div>

            <div className="container-row flex flex-row flex-wrap">
                <div className="container-column flex-50">
                <button type={'submit'} onClick={()=>message()}>Update</button>
                </div>
            </div>
        </div>
        </form>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{zIndex:'100000000'}}
        />
    </AdminLayout>
  )
}

export default EditProfile