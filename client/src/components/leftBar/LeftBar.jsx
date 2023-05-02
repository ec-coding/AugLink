import React, { useContext } from 'react'
import Friends from './../../assets/1.png';
import Groups from './../../assets/2.png';
import Market from './../../assets/3.png';
import Watch from './../../assets/4.png';
import Memories from './../../assets/5.png';
import Events from './../../assets/6.png';
import Gaming from './../../assets/7.png';
import Gallery from './../../assets/8.png';
import Videos from './../../assets/9.png';
import Messages from './../../assets/10.png';
import Tutorials from './../../assets/11.png';
import Courses from './../../assets/12.png';
import Fund from './../../assets/13.png';
import "./leftBar.scss"
import { AuthContext } from '../../context/authContext';

const LeftBar = () => {

    const { currentUser } = useContext(AuthContext)

    return (
        <div className="leftBar">
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <img src={currentUser.profilePic} alt="" />
                        <span>{currentUser.name}</span>
                    </div>
                    <div className="item">
                        <div>
                            <img src={Friends} alt="" />
                            <span>FRIENDS</span>
                        </div>
                    </div>
                    <div className="item">
                        <div>
                            <img src={Groups} alt="" />
                            <span>GROUPS</span>
                        </div>
                    </div>
                    <div className="item">
                        <div>
                            <img src={Market} alt="" />
                            <span>MARKET</span>
                        </div>
                    </div>
                    <div className="item">
                        <div>
                            <img src={Watch} alt="" />
                            <span>WATCH</span>
                        </div>
                    </div>
                    <div className="item">
                        <div>
                            <img src={Memories} alt="" />
                            <span>MEMORIES</span>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    <span>Your shortcuts</span>
                    <div className="item">
                        <div>
                            <img src={Events} alt="" />
                            <span>EVENTS</span>
                        </div>
                    </div>
                    <div className="item">
                        <div>
                            <img src={Gaming} alt="" />
                            <span>GAMING</span>
                        </div>
                    </div>
                    <div className="item">
                        <div>
                            <img src={Gallery} alt="" />
                            <span>GALLERY</span>
                        </div>
                    </div>
                    <div className="item">
                        <div>
                            <img src={Videos} alt="" />
                            <span>VIDEOS</span>
                        </div>
                    </div>
                    <div className="item">
                        <div>
                            <img src={Messages} alt="" />
                            <span>MESSAGES</span>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    <span>Others</span>
                    <div className="item">
                        <div>
                            <img src={Tutorials} alt="" />
                            <span>TUTORIALS</span>
                        </div>
                    </div>
                    <div className="item">
                        <div>
                            <img src={Courses} alt="" />
                            <span>COURSES</span>
                        </div>
                    </div>
                    <div className="item">
                        <div>
                            <img src={Fund} alt="" />
                            <span>FUND</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftBar
