import { Navigate, Outlet } from "react-router-dom"

export const PrivateRouter=()=>{
    const user=window.localStorage.getItem('userCredential')
    return (
           
            user ? <Outlet/> : <Navigate to='/login'/>
            
    )
}