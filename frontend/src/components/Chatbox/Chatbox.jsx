import React from 'react'
import './Chatbox.css'
import SingleBox from './SingleBox'
const Chatbox = () => {
  return (
    <div className="chatbox">
        <div className="container">
            <div className="title">Chat!</div>
           <SingleBox/>
           <SingleBox/>
           <SingleBox/>
           <SingleBox/>
           <SingleBox/>
           <SingleBox/>
           <SingleBox/>
           <SingleBox/>
        </div>
    </div>
  )
}

export default Chatbox