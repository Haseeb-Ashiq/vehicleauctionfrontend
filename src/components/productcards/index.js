import React, { useEffect } from 'react'
import { FaRegHeart, FaGavel } from 'react-icons/fa';
import car from '../../images/frontcar.png';
import car1 from '../../images/car3.png';
import './style.css';
import Timer from '../timer';
import useTimer from '../hook/useTimer';
import { Navigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addWishList } from '../../Redux/actions/product.action';
import { imgBase } from '../../apiConfig';
function ProductCard(props) {
    const [days,hours,minutes,secs,Counter]=useTimer({future:props.pro.auctionEndDate});
    const dispatch=useDispatch();
    useEffect(()=>{
           Counter();
    },[])
    return (
        <>
            <div className="product-cards">
                <div className="product-inner-cards flex flex-column">
                    <Timer  days={days} hours={hours} minutes={minutes} secs={secs}/>
                    <div className="product-image flex flex-justify-center flex-items-center">
                        <img src={`${imgBase}/${props.pro?.productPictures[0]?.img}`} alt="" />
                    </div>
                    <div className="btn-sec flex flex-justify-center flex-items-center">
                        <Link to={`/bid/${props.pro._id}`} className='flex flex-justify-center flex-items-center'><FaGavel /> Bid</Link>
                        <button onClick={()=>dispatch(addWishList(props.pro))}><FaRegHeart /> Wish List</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductCard;