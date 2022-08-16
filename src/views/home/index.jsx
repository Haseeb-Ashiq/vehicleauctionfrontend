import React, { useEffect } from 'react'
import Layout from '../../components/layout';
import './style.css';
import car from '../../images/frontcar.png';
import ProductCard from '../../components/productcards';
import { FaRegUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, getProductByCatagory } from '../../Redux/actions/product.action';
import loader from '../../images/loading.gif';
import { Navigate,useNavigate } from 'react-router-dom';
import { getCatagory } from '../../Redux/actions/catagory.action';
import { imgBase } from '../../apiConfig';
// import '../../generic.css';
function Index() {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const product = useSelector(state => state.Product);
  const catagory=useSelector(state=>state.Catagory);
  useEffect(() => {
     dispatch(getProduct());
     dispatch(getCatagory());
  }, [])

  return (
    <>
      <Layout>
        <div className="hero-container flex flex-row">
          <div className="text-box flex-50 flex flex-column flex-justify-center flex-items-center">
            <h1>World's Biggest Cars Auction System</h1>
            <div className="btn-section">
              <button onClick={() => navigate('/signup') }><FaRegUser /> Register Now</button>
            </div>
          </div>
          <div className="img-box flex-50 flex flex-justify-center flex-items-center">
            <img src={car} alt="" />
          </div>
        </div>
       
        <div className="catagory-container flex flex-justify-center flex-items-center">
        <div onClick={()=>dispatch(getProduct())} className="catagory-items flex flex-column flex-justify-center flex-items-center">
            <div className="cata-img-box">
              <img src={car} alt="" />
            </div>
            <div className="cata-text-box">
              <h3>All</h3>
            </div>
          </div>
          {
            catagory.catagories && catagory.catagories.map((cata,index)=>(
              <>
               <div key={index} onClick={()=>dispatch(getProductByCatagory(cata._id))} className="catagory-items flex flex-column flex-justify-center flex-items-center">
            <div className="cata-img-box">
              <img src={`${imgBase}/${cata.image}`} alt="" />
            </div>
            <div className="cata-text-box">
              <h3>{cata.name}</h3>
            </div>
          </div>
              </>
            ))
          }

        </div>

        <div className="product-container">
          <div className="product-wrapper flex flex-wrap flex-justify-center flex-items-center">
          {
          product.isLoading ? <><img src={loader}/></> : product.filterProducts.length > 0 ? product.filterProducts.map(pro=>  <ProductCard pro={pro}/>) : product.products.map(pro=>  <ProductCard pro={pro}/>)
         }
         
          </div>
        </div>
      </Layout>

    </>
  )
}

export default Index