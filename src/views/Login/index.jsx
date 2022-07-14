import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout';
import './style.css';
import logo from '../../images/vehicle.jpg';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signinUser } from '../../Redux/actions/user.action';
import { ToastContainer } from 'react-toastify';
import loading from '../../images/loading.gif';
import Cookie from 'js-cookie';
function Login() {
    const [getCookie,setGetCookie]=useState('')
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [isKeep,setIsKeep]=useState(false);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const user=useSelector(state=>state.User);
    useEffect(()=>{
      
    },setTimeout(() => {
        handleCookie();
      }, 1000))
    const handleCookie=()=>{
        const data=Cookie.get('loginCredential')
        if(data!==undefined)
        {
            
            const valueData=JSON.parse(data)
            setGetCookie(valueData);
            setEmail(getCookie.email)
            setPassword(getCookie.password)
        //    setIsKeep(true)
        }
    }
    
    const loginSubmit=(e)=>{
        e.preventDefault();
        const obj={
            email,
            password
        }
        if(isKeep) Cookie.set('loginCredential',JSON.stringify(obj),{
            expires:1,
            secure:true,
            sameSite:'Strict',
            path:'/'
        })
        dispatch(signinUser(obj));
    }
    if(user.isLoaded)
    {
        return <Navigate to='/'/>
    }
  return (
    <>
    <Layout>
        {
            user.isLoading && <img src={loading}/>
        }
        <div className="login-window-container-row">
           <div className="login-container flex flex-row">
               <div className="login-img-side flex-50 flex flex-justify-center flex-items-center">
                   <div className="login-img-box ">
                   <img src={logo} alt="" />
                   </div>
                   
               </div>
               <div className="login-input-side flex-50">
                   <form onSubmit={loginSubmit}>
                   <div className="login-input-area flex flex-column flex-justify-center flex-items-center">
                       <div className="input-field flex flex-justify-center flex-items-center">
                           <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder='enter email'/>
                       </div>
                       <div className="input-field flex flex-justify-center flex-items-center">
                           <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required placeholder='enter password'/>
                       </div>
                       <div className="checkbox-field flex">
                           <input type={'checkbox'} checked={isKeep} onChange={(e)=>setIsKeep(e.target.checked)}/> Keep me login.
                       </div>
                       <div className="button-field">
                           <button type={'submit'}>Login</button>
                       </div>
                       <div className="signup-text-field flex flex-justify-center flex-items-center">
                           Have you not any account? <Link to={'/signup'}>Signup</Link>
                       </div>
                   </div>
                   </form>
               </div>
           </div>
        </div>
        <ToastContainer
        position='top-right'
        style={{zIndex:'100000'}}
        />
    </Layout>
    </>
  )
}

export default Login