import React from 'react'
import './style.css';
export default function Timer({days,hours,minutes,secs}) {
  return (
    <>
     <div className="timer flex flex-row flex-justify-sa">
                              <div className="day flex flex-column flex-justify-center flex-items-center">
                                  <span>{days}</span>
                                  <span>days</span>
                              </div>
                              <div className="hours flex flex-column flex-justify-center flex-items-center">
                                  <span>{hours}</span>
                                  <span>hours</span>
                              </div>
                              <div className="mins flex flex-column flex-justify-center flex-items-center">
                                  <span>{minutes}</span>
                                  <span>mins</span>
                              </div>
                              <div className="sec flex flex-column flex-justify-center flex-items-center">
                                  <span>{secs}</span>
                                  <span>sec</span>
                                  </div>                             
                          </div>
    </>
  )
}
