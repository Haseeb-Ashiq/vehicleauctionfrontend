import React, { useState } from 'react'
import AdminLayout from '../../../components/admin-components/layout';
import Layout from '../../../components/layout';
import './style.css';
import { FaRegHeart ,FaDollarSign,FaGavel, FaTrophy } from 'react-icons/fa';
import LineChart from '../../../components/admin-components/linechart';
import PieChart from '../../../components/admin-components/doughnutchart';
import Model from '../../../components/model';
function Home() {
  const [open,setOpen]=useState(false);
  const closeModel=(e)=>{
    setOpen(e);
  }
  return (
    <>
      <AdminLayout>
        <button onClick={()=>setOpen(true)}>open Model</button>
        <div className="super-container">
          <div className="panel flex flex-wrap">
            <div className="panel-tabs tab-color-2 flex flex-row">
              <div className="panel-tab-icon flex-50 flex flex-justify-center flex-items-center">
                <FaDollarSign />
              </div>
              <div className="panel-tab-text flex-50 flex flex-column flex-justify-center flex-items-center">
                <p>Amount</p>
                <span>3</span>
              </div>
            </div>
            <div className="panel-tabs tab-color-1 flex flex-row">
              <div className="panel-tab-icon flex-50 flex flex-justify-center flex-items-center">
                <FaRegHeart />
              </div>
              <div className="panel-tab-text flex-50 flex flex-column flex-justify-center flex-items-center">
                <p>Wish List</p>
                <span>3</span>
              </div>
            </div>
            <div className="panel-tabs tab-color-3 flex flex-row">
            <div className="panel-tab-icon flex-50 flex flex-justify-center flex-items-center">
                <FaGavel  />
              </div>
              <div className="panel-tab-text flex-50 flex flex-column flex-justify-center flex-items-center">
                <p>Bids on Vehicle</p>
                <span>3</span>
              </div>
            </div>
            <div className="panel-tabs tab-color-4 flex flex-row">
            <div className="panel-tab-icon flex-50 flex flex-justify-center flex-items-center">
                <FaGavel  />
              </div>
              <div className="panel-tab-text flex-50 flex flex-column flex-justify-center flex-items-center">
                <p>Have Bids</p>
                <span>3</span>
              </div>
            </div>
            <div className="panel-tabs tab-color-5 flex flex-row">
            <div className="panel-tab-icon flex-50 flex flex-justify-center flex-items-center">
                <FaTrophy  />
              </div>
              <div className="panel-tab-text flex-50 flex flex-column flex-justify-center flex-items-center">
                <p>Won!</p>
                <span>0</span>
              </div>
            </div>
          </div>

          {/* charts section */}

          <div className="chart-container flex flex-row flex-wrap">
             <div className="line-chart flex-50">
               <LineChart/>
             </div>
             <div className="naugat-chart flex-50">
               <PieChart/>
             </div>
           </div>

          {/* charts section ending */}
        </div>
        {open && <Model closeModel={closeModel}/>}
      </AdminLayout>
    </>
  )
}

export default Home