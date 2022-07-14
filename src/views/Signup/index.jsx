import React, { useState } from 'react'
import Layout from '../../components/layout';
import logo from '../../images/vehicle.jpg';
import './style.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../../Redux/actions/user.action';
import loading from '../../images/loading.gif';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Signup() {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userPicture, setUserPicture] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(state => state.User);
    const userSubmit = (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('fullname', fullname);
        form.append('email', email);
        form.append('password', password);
        form.append('userPicture', userPicture);
        dispatch(signupUser(form));

    }
    const message = () => {
        user.isLoaded && toast.success('your register successfully')
        // alert('hello')
    }
    return (
        <>
            <Layout>
                {
                    user.isLoading && <img src={loading} />
                }
                <div className="signup-window-container-row">
                    <div className="signup-container flex flex-row">
                        <div className="signup-img-side flex-50 flex flex-justify-center flex-items-center">
                            <div className="signup-img-box">
                                <img src={logo} alt="" />
                            </div>
                        </div>
                        <div className="signup-input-side flex-50">
                            <form onSubmit={userSubmit} encTyp='multipart/form-data'>
                                <div className="signup-input-area flex flex-column flex-justify-center flex-items-center">
                                    <div className="input-field flex flex-justify-center flex-items-center">
                                        <input type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} required placeholder='Enter fullname (ex:Muhammad Ali)' />
                                    </div>
                                    <div className="input-field flex flex-justify-center flex-items-center">
                                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='Enter email (forexample@gmail.com)' />
                                    </div>
                                    <div className="input-field flex flex-justify-center flex-items-center">
                                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder='Enter password' />
                                    </div>
                                    <div className="file-field flex">
                                        <input type={'file'} onChange={(e) => setUserPicture(e.target.files[0])} />
                                    </div>
                                    <div className="button-field">
                                        <button type={'submit'} onClick={message}>Sign up</button>
                                    </div>
                                    <div className="login-text-field flex flex-justify-center flex-items-center">
                                        Do you have already an account? <Link to={'/login'}>Sign in</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Layout>
            <ToastContainer position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            style={{zIndex:'100000000'}}
            >

        </ToastContainer>
        </>
    )
}

export default Signup