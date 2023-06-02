import React from 'react'
import "./rightBar.scss"
import AnimatedButtonBlue from '../animatedButton/AnimatedButtonBlue';
import AnimatedButtonRed from '../animatedButton/AnimatedButtonRed';
import ShiftingButton from '../shiftingButton/ShiftingButton';

const RightBar = () => {
  const buttonColor = ''

  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span className="subheader">Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://i.imgur.com/2tH8Otv.png" alt="" />
              <span>JC Denton</span>
            </div>
            <div className="buttons">
              <ShiftingButton buttonText={"follow"} />
              <ShiftingButton buttonText={"dismiss"} />
            </div>
          </div>
        </div>
        <div className="item">
          <span className="subheader">Latest Activity</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://i.imgur.com/2tH8Otv.png" alt="" />
              <p>
              <span>JC Denton</span> changed their cover picture
              </p>
            </div>
            <span className="subheader">1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://i.imgur.com/2tH8Otv.png" alt="" />
              <p>
              <span>JC Denton</span> switched to non-lethal takedowns
              </p>
            </div>
            <span className="subheader">30 min ago</span>
          </div>
        </div>
        <div className="item">
          <span className="subheader">Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://i.imgur.com/2tH8Otv.png" alt="" />
              <div className="online" />
              <span>JC Denton</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://i.imgur.com/BKPjh3r.png" alt="" />
              <div className="online" />
              <span>Megan Reed</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://www.gamerguides.com/assets/trophies/resize100x-/3/11704.jpeg" alt="" />
              <div className="online" />
              <span>Tong Si Hung</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar
