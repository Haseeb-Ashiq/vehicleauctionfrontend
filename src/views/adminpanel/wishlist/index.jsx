import React, { useEffect, useState } from 'react'
import './style.css';
import AdminLayout from '../../../components/admin-components/layout';
import { useDispatch, useSelector } from 'react-redux';
import { getWishList } from '../../../Redux/actions/product.action';
import Model from '../../../components/model';
import Table, { TableBody, TableCell, TableHeader, TableRow } from '../../../components/admin-components/table';
function WishList() {
  const product=useSelector(state=>state.Product);
  const dispatch=useDispatch();
  const [open,setOpen]=useState(false);
  const [id,setID]=useState('');
  const headerData=[
    'Sr.no',
    'Vehicle Name',
    'Auction Ending Date',
    'Auction'
  ]
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
  // <th>Sr.No</th>
  //                <th>Vehicle Name</th>
  //                <th>Auction Ending Date</th>
  //                <th>Actions</th>
  return (
    <>
    {
       console.table(product.wish)
    }
    <AdminLayout>
      {/* <button onClick={()=>setOpen(true)}>open model</button> */}
       <div className="wishlist-container-row">
         <Table>
           <TableHeader>
             <TableRow>
               {
                 headerData.map(d=>(
                   <>
                   <TableCell>
                     {
                       d
                     }
                   </TableCell>
                   </>
                 ))
               }
             </TableRow>
           </TableHeader>
           <TableBody>
             {
               product.wish.map((p,index)=>(
                 <>
                 <TableRow>
                   <TableCell>
                     {++index}
                   </TableCell>
                   <TableCell>
                     {
                       p.name
                     }
                   </TableCell>
                   <TableCell>
                     {
                       p.auctionEndDate
                     }
                   </TableCell>
                   <TableCell>
                     Actions
                   </TableCell>
                 </TableRow>
                 </>
               ))
             }
           </TableBody>
         </Table>
       </div>
       {open && <Model title={id} closeModel={closeModel}/>}
    </AdminLayout>
    {console.log(open)}
    
    </>
  )
}

export default WishList