import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AdminLayout from '../../../components/admin-components/layout';
import { getBidsByUserId } from '../../../Redux/actions/bid.action';
import './style.css';
function BidsOnVehicle() {
  const dispatch=useDispatch();
  const {auction,isAuctionLoaded}=useSelector(state=>state.Bid);
  const [userId,setUserId]=useState(JSON.parse(localStorage.getItem('userCredential')))
  useEffect(()=>{
dispatch(getBidsByUserId(userId._id))
  },[])
  return (
   <AdminLayout>
     {
       console.log(auction)
     }
      <div className="auction-container">
        <div className="table-container">
          <div className="table-header">
            <div className="table-row flex">
              <div className="table-cell flex-10 flex flex-justify-center flex-items-center">
                Sr.No
              </div>
              <div className="table-cell flex-10 flex flex-justify-center flex-items-center">
                Product Image
              </div>
              <div className="table-cell flex-10 flex flex-justify-center flex-items-center">
                Product Name
              </div>
              <div className="table-cell flex-10 flex flex-justify-center flex-items-center">
                Price
              </div>
              <div className="table-cell flex-10 flex flex-justify-center flex-items-center">
                Bid
              </div>
              <div className="table-cell flex-10 flex flex-justify-center flex-items-center">
                Bid date
              </div>
              <div className="table-cell flex-10 flex flex-justify-center flex-items-center">
                Status
              </div>
            </div>
          </div>

          <div className="table-body">
            {
              isAuctionLoaded ? 
              auction.map((a,index)=>(
                <>
                 <div className="table-row flex">
              <div className="table-cell flex-10 flex flex-justify-center flex-items-center">
                {++index}
              </div>
              <div className="table-cell flex-10 flex flex-justify-center flex-items-center">
                <img src={`http://localhost:5000/public/${a?.product?.productPictures[0].img}`}/>
              </div>
              <div className="table-cell flex-10 flex flex-justify-center flex-items-center">
                {
                  a?.product?.name
                }
              </div>
              <div className="table-cell flex-10 flex flex-justify-center flex-items-center">
                {
                  a?.product?.price
                }
              </div>
              <div className="table-cell flex-10 flex flex-justify-center flex-items-center">
                {
                  a.bid
                }
              </div>
              <div className="table-cell flex-10 flex flex-justify-center flex-items-center">
                {
                  new Date(a.bidDate).toLocaleDateString()
                }
            </div>
            <div className="table-cell flex-10 flex flex-justify-center flex-items-center">
                Active
              </div>
            </div>
                </>
              ))
              :
              <><h3>Loading...</h3></>
            }
            

          </div>
        </div>
      </div>
   </AdminLayout>
  )
}

export default BidsOnVehicle