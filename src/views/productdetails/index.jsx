import React, { useEffect, useRef, useState } from 'react'
import Layout from '../../components/layout'
import './style.css';
import img from '../../images/frontcar.png';
import img2 from '../../images/car2.png';
import img3 from '../../images/car3.png';
import Timer from '../../components/timer';
import { clear } from '@testing-library/user-event/dist/clear';
import useTimer from '../../components/hook/useTimer';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneProduct } from '../../Redux/actions/product.action';
import {getUser} from '../../Redux/actions/user.action';
import { addBid, getBids } from '../../Redux/actions/bid.action';
function Bid() {
    const dispatch=useDispatch();
    const product=useSelector(state=>state.Product);
    const {user}=useSelector(state=>state.User);
    const {isBid,bids} = useSelector(state=>state.Bid);
    const [bidField,setBidField]=useState(false);
    const [bid,setBid]=useState('');
    const [fdate,setFDate]=useState('');
    const ref=useRef();
    const params=useParams();
    const [imgUrl,setImgUrl]=useState(img)
    const [days,hours,minutes,secs,Counter]=useTimer({future:product?.product?.auctionEndDate});
    useEffect(()=>{
        const m=()=>{
        return Counter();
        }
m();
    },[])
    useEffect(()=>{
    dispatch(getOneProduct(params.id)); 
    dispatch(getUser())
    dispatch(getBids(product?.product?._id))
    },[])
    useEffect(()=>{
       isBid && console.log('add successfully')
    },[])
    const getRef=()=>{
        let tagArr=Array.from(ref.current.children);
       for(let i=0;i<tagArr.length;i++)
       {
           tagArr[i].addEventListener('click',function(){
             for(let j=0;j<tagArr.length;j++)
             {
                 tagArr[j].classList.remove('active');
             }
             tagArr[i].classList.add('active');
             let img=Array.from(tagArr[i].children)
             setImgUrl(img[0].src)
           })
       }
    }

    const hanldeBidInput=(e)=>{
        const bids={
              product:product.product._id,
              auctionNo:product.product._id,
              user:user._id,
              bid
        }
        dispatch(addBid(bids));
        dispatch(getBids(product?.product?._id));
    }
  return (
   <>
   {
        console.log(product.product)
   }
   <Layout>
       <div className="bid-container-row">
           <div className="bid-details flex flex-row">
               <div className="bid-image-sec flex-50 flex flex-column">
                   <div className="main-image-box">
                       <img src={imgUrl}/>
                   </div>
                   <div ref={ref} onClick={getRef} className="img-tabs flex flex-row flex-justify-center flex-items-center">
                   <div className="img-1 active">
                   <img src={img}/>
                   </div>
                   <div className="img-2">
                       <img src={img2}/>
                   </div>
                   <div className="img-3">
                   <img src={img3}/>
                   </div>
                   </div>
               </div>

               <div className="bid-detail-sec flex-50">
                  <div className="bid-detail-inner-sec flex flex-column">
                      <div className="remaining-time flex flex-justify-center flex-items-center">
                        <Timer days={days} hours={hours} minutes={minutes} secs={secs}/>
                      </div>
                      <div className="bid-detail-info">
                          <div className="car-name flex flex-justify-center flex-items-center">
                              <h3>{product?.product?.name}</h3>
                          </div>
                          <div className="total-bids">
                              <h4>Total Bids: <span>{bids?.length}</span></h4>
                          </div>
                          <div className="bid-btn-sec flex flex-row felx-justify-center flex-items-center">
                             {
                                 bidField ? <>
                                 <div className="input-area flex flex-row flex-justify-center flex-items-center">
                                 <input type={'number'} value={bid} onChange={(e)=>setBid(e.target.value)} placeholder='Enter bid'/>
                                 <button onClick={hanldeBidInput} id="bid-btn">Add</button>
                                 <button id="cancel-bid-btn" onClick={()=>setBidField(false)}>Cancel</button>
                                 </div>
                                 </> : <> <button onClick={()=>setBidField(true)}>Bid on</button>
                                 <button>Wish List</button></>

                             }
                             
                          </div>
                      </div>
                  </div>
               </div>
           </div>
       </div>
      {/* products detail */}
      <div className="bid-container-row">
          <div className="detail-inner">
              <h2>Vehicle Details</h2>
              <table className='table' cellSpacing={0}>
                  <thead>
                      <tr>
                          <th>Vehicle ID</th>
                          <td>{product?.product?._id}</td>
                          <th>Name</th>
                          <td>{product?.product?.name}</td>
                      </tr>
                      <tr>
                          <th>Vehicle Model</th>
                          <td>{product?.product?.detail?.productModel}</td>
                          <th>Vehicle Buy Date</th>
                          <td>{product?.product?.detail?.productBuyDate}</td>
                      </tr>
                      <tr>
                          <th>Show Room</th>
                          <td>{product?.product?.detail?.showRoom}</td>
                          <th>Number Plate</th>
                          <td>{product?.product?.detail?.numberPlate}</td>
                      </tr>
                      <tr>
                          <th>Cylender</th>
                          <td>{product?.product?.detail?.cylender}</td>
                          <th>Engine Number</th>
                          <td>{product?.product?.detail?.engineNumber}</td>
                      </tr>
                      <tr>
                          <th>Milege</th>
                          <td>{product?.product?.detail?.milege}</td>
                          <th>Transmission</th>
                          <td>{product?.product?.detail?.transmision}</td>
                      </tr>
                      <tr>
                          <th colSpan={4}>Description</th>
                      </tr>
                      <tr>
                      <td colSpan={4}>{product?.product?.detail?.description}</td>
                      </tr>
                  </thead>
              </table>
          </div>
      </div>
   </Layout>
   </>
  )
}

export default Bid