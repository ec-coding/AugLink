import React from 'react'
import "./rightBar.scss"

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="userInfo">
            <img src="" alt="" />
            <span>Jane Doe</span>
          </div>
          <div className="buttons">
            <button>Follow</button>
            <button>Dismiss</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar
