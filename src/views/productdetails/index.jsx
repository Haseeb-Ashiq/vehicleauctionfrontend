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
import { getOneProduct, getProduct } from '../../Redux/actions/product.action';
import {getUser} from '../../Redux/actions/user.action';
import { addBid, getBids } from '../../Redux/actions/bid.action';
import { imgBase } from '../../apiConfig';
function Bid({socketRef}) {
    const ref=useRef();
    const params=useParams();
    const dispatch=useDispatch();
    const {products}=useSelector(state=>state.Product);
    const {user}=useSelector(state=>state.User);
    const {isBid,bids} = useSelector(state=>state.Bid);
    const [bidField,setBidField]=useState(false);
    const [bid,setBid]=useState('');
    const [fdate,setFDate]=useState('');
    const [imgUrl,setImgUrl]=useState('')
    const [product,setProduct]=useState({...products.find(p=>p._id===params.id)});
    const [days, setDays] = useState('');
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [secs, setSecs] = useState('');
    const [users,setUsers]=useState([]);
    const [bider,setBider]=useState();
    let id = '';
    // const [days,hours,minutes,secs,Counter]=useTimer({future:product?.product?.auctionEndDate});
    // setImgUrl(product?.product?.productPictures[0].img)
    useEffect(()=>{
        dispatch(getOneProduct(params.id))
    dispatch(getUser())
    },[])
    useEffect(()=>{
        dispatch(getBids(product?.product?._id))
    },[])
    useEffect(()=>{
        TimerHandler(product.auctionEndDate);
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
              product:product._id,
              auctionNo:product._id,
              user:user._id,
              bid
        }
        dispatch(addBid(bids));
        dispatch(getBids(product?.product?._id));
        socketRef.current.emit('join',{name:'Muhammad Haseeb',roomId:params.id})
        // socketRef.current.on('joined',({clients})=>{
        // setUsers(clients);
        // })
        socketRef.current.on('NewBid',({_bids})=>{
              setBider({..._bids})
              })
    }
    const TimerHandler=(future)=>{
        id = setInterval(() => {
            let futureDate=new Date(future).getTime();
            let now=new Date().getTime();
            let distance = futureDate - now;
            let day = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let sec = Math.floor((distance % (1000 * 60)) / (1000));
            if (distance < 0) {
                clearInterval(id);
            }
            else {
                setDays(day);
                setHours(hour);
                setMinutes(min);
                setSecs(sec);
            }
        }, 1000);

    }

  return (
   <>
   <Layout>
       <div className="bid-container-row">
           <h3>Contributers</h3>
           {bider?.bid}
           {/* {users.length > 0 ? users.map(u=><p>{u.socketId}</p>) : <></>} */}
           {/* {product._id===bider.auctionNo ? bider.bid : ''} */}
       </div>

       <div className="bid-container-row">
           <div className="bid-details flex flex-row">
              
               <div className="bid-image-sec flex-50 flex flex-column">
                   <div className="main-image-box">
                       <img src={`${imgBase}/${product?.productPictures[0].img}`}/>
                   </div>
                   <div ref={ref} onClick={getRef} className="img-tabs flex flex-row flex-justify-center flex-items-center">
                   {
                       product?.productPictures?.map(p=>(
                           <>
                            <div className="img-1">
                   <img src={`${imgBase}/${p.img}`}/>
                   </div>
                           </>
                       ))
                   }
                  
                   
                   </div>
               </div>

               <div className="bid-detail-sec flex-50">
                  <div className="bid-detail-inner-sec flex flex-column">
                      <div className="remaining-time flex flex-justify-center flex-items-center">
                        <Timer days={days} hours={hours} minutes={minutes} secs={secs}/>
                      </div>
                      <div className="bid-detail-info">
                          <div className="car-name flex flex-justify-center flex-items-center">
                              <h3>{product?.name}</h3>
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
              {/* <table className='table' cellSpacing={0}>
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
              </table> */}
          </div>
      </div>
   </Layout>
   </>
  )
}

export default Bid