import Index from "./views/home";
import {BrowserRouter as Router , Navigate, Route,Routes} from 'react-router-dom';
import Bid from "./views/productdetails";
import Login from "./views/Login";
import Signup from "./views/Signup";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { PrivateRouter } from "./components/hoc/privateRouter";
import Home from "./views/adminpanel/admin-home";
import BidsOnVehicle from "./views/adminpanel/bidsonproduct";
import WishList from "./views/adminpanel/wishlist";
import Won from "./views/adminpanel/won";
import Profile from "./views/adminpanel/profile";
import EditProfile from "./views/adminpanel/editprofile";
import { SocketInit } from "./socket";
function App() {
  const user=useSelector(state=>state.User);
  const socketRef=useRef(null);
  const [bider,SetBider]=useState();
  useEffect(()=>{
    const init=async ()=>{
      socketRef.current= await SocketInit();
      // socketRef.current.emit('join',{name:'Muhammad Haseeb'})
      // socketRef.current.on('joind',({msg})=>{
      //   console.log(msg)
      // })
      // socketRef.current.on('NewBid',({_bids})=>{
      //   SetBider({..._bids})
      //   })
    }
    init();
  },[])
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route exact path='/' element={<Index/>}/> */}
          <Route element={<PrivateRouter/>}>
               <Route exact path='/bid/:id' element={<Bid socketRef={socketRef}/>}/>
               <Route exact path='/' element={<Index/>} /> 
               <Route exact path='/dashboard' element={<Home/>} />     
               <Route exact path='/bidonvehicles' element={<BidsOnVehicle/>}/>
               <Route exact path='/wishlist' element={<WishList/>} />
               <Route exact path='/won-vehicle' element={<Won/>} />
               <Route exact path='/profile' element={<Profile/>} />
               <Route exact path='/editprofile' element={<EditProfile/>} />
          </Route>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
