import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import logo from '../../images/vehicle.jpg';
import {FaRegUserCircle, FaRegHeart} from 'react-icons/fa';
import './style.css'
import img from '../../images/frontcar.png';
import { useSelector } from 'react-redux';
function Navbar() {
    const user=useSelector(state=>state.User);
    const navigate=useNavigate();
    return (
        <>
            <div className="navbar">
                <div className="navbar-left flex-50">
                      <img src={logo}/>
                </div>
                <div className="navbar-right flex-50 flex flex-justify-center flex-items-center">
                    <ul className='flex flex-justify-center flex-items-center'>
                        <li><button className='wish-list flex flex-justify-center flex-items-center'><FaRegHeart/></button> <span className='wish-counter flex flex-justify-center flex-items-center'>25</span></li>
                        {
                            user.isLoaded ? <><li><Link to={'/dashboard'}><img src={img}/></Link></li></> :
                            <> <li><button onClick={()=>navigate('/login')} className='flex flex-justify-center flex-items-center'><FaRegUserCircle/></button></li></>
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar