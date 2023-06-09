import React, { useContext } from 'react';
import { Link } from "react-router-dom";
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
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from '../../axios';
import { useLocation } from "react-router-dom";
import { Flipper, Flipped } from 'react-flip-toolkit';

const LeftBar = () => {

    const { currentUser } = useContext(AuthContext)

    const userId = parseInt(useLocation().pathname.split("/")[2])

    const { isLoading, error, data } = useQuery(['user'], () =>
        makeRequest.get("/users/find/" + userId).then((res) => {
            return res.data;
        })
    );

    return (
        <div className="leftBar">
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <Link to={"/profile/" + currentUser.id}>
                            <img src={"/uploads/" + data?.profilePic} alt="" />
                        </Link>
                        <span>{currentUser.name}</span>
                    </div>

                    <div className="item">
                        <div>
                            <Flipped flipId="navFriends">
                                <span>FRIENDS</span>
                            </Flipped>
                        </div>
                    </div>
                    <div className="item">
                        <div>
                            <Flipped flipId="navGroups">
                                <span>GROUPS</span>
                            </Flipped>
                        </div>
                    </div>
                    <div className="item">
                        <div>
                            <Flipped flipId="navMessages">
                                <span>MESSAGES</span>
                            </Flipped>
                        </div>
                    </div>
                    <div className="item">
                        <div>
                            <Flipped flipId="navSettings">
                                <span>SETTINGS</span>
                            </Flipped>
                        </div>
                    </div>
                </div>
                {/* <hr />
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
                <hr /> */}
                {/* <div className="menu">
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
                </div> */}
            </div>
        </div>
    )
}

export default LeftBar
