import React from 'react'
import './style.css';
function Model(props) {
  return (
   <>
   <div className='model-background'>
       <div className='model-container flex flex-column'>
           <div className='model-header flex flex-justify-sb'>
               <div className='title'>{props.title}</div>
               <div className='btn-close'><button className='flex flex-justify-center flex-items-center' onClick={()=>props.closeModel(false)}>x</button></div>
           </div>
           <div className='model-body'>
               {
                   props.children
               }
           </div>
        <h1>hellldlsjfj jsk djsjkkl</h1>
       </div>
   </div>
   </>
  )
}

export default Model