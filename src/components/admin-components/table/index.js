import React from 'react'
import './style.css';
function Table(props) {
  return (
    <>
     <div className="table-container">
          {
            props.children
          }
        </div>
    </>
  )
}

export default Table

export function TableHeader(props){
  return (
    <>
    <div className="table-header">
            {
                props.children
            }
          </div>
    </>
  )
}

export function TableBody(props){
  return (
    <>
    <div className='table-body'>
      {props.children}
    </div>
    </>
  )
}

export function TableRow(props){
    return (
        <>
        <div className='table-row flex'>
           {
               props.children
           }
        </div>
        </>
    )
}
export function TableCell(props){
    return (
        <>
        <div className='table-cell flex-10 flex flex-justify-center flex-items-center'>
            {
                props.children
            }
        </div>
        </>
    )
}