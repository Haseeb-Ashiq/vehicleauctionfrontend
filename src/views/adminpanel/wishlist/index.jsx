import React, { useEffect, useState } from 'react'
import './style.css';
import AdminLayout from '../../../components/admin-components/layout';
import { useDispatch, useSelector } from 'react-redux';
import { getWishList } from '../../../Redux/actions/product.action';
import Model from '../../../components/model';
function WishList() {
  const product=useSelector(state=>state.Product);
  const dispatch=useDispatch();
  const [open,setOpen]=useState(false);
  const [id,setID]=useState('');
  useEffect(()=>{
    dispatch(getWishList());
  },[])
  const closeModel=(e)=>{
    setOpen(e)
  }
  const combineMethod=(d)=>{
    setOpen(true);
    setID(d)
  }
  return (
    <>
    {
       console.table(product.wish)
    }
    <AdminLayout>
      <button onClick={()=>setOpen(true)}>open model</button>
       <div className="wishlist-container-row">
         <div className="table-container">
           <table cellSpacing={0}>
             <thead>
               <tr>
                 <th>Sr.No</th>
                 <th>Vehicle Name</th>
                 <th>Auction Ending Date</th>
                 <th>Actions</th>
               </tr>
             </thead>
             <tbody>
               {
                 product.wish && product.wish.map((list,index)=>(
                   <>
                   <tr>
                   <td>
                     {++index}
                   </td>
                   <td>{list.name}</td>
                   <td>{list.auctionEndDate}</td>
                   <td><button onClick={()=>combineMethod(list._id)}>view</button></td>
                   </tr>
                   </>
                 ))
               }
               <tr>
               </tr>
             </tbody>
           </table>
         </div>
       </div>
       {open && <Model title={id} closeModel={closeModel}/>}
    </AdminLayout>
    {console.log(open)}
    
    </>
  )
}

export default WishList