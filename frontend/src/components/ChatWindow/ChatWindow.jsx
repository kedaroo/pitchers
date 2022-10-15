import React from 'react'
import './ChatWindow.css'

const ChatWindow = () => {
  return (
    <div className="chat-window">
        <div className="container">
            <div className="chat-container">
                messages will be displayed here.....
            </div>
            <div className="mssg-input">
                <input type="text" placeholder="write your message.." />
                <button>Send</button>
            </div>
        </div>
    </div>
  )
}

export default ChatWindow