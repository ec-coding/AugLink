import React from 'react'
import { Link } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { DarkMode } from '../../../node_modules/@mui/icons-material/index';
import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{textDecoration:"none"}}>
        <span>AugLink</span>
        </Link>
        <HomeOutlinedIcon/>
        <DarkModeOutlinedIcon/>
        <GridViewOutlinedIcon/>
        <div className="search">
            <SearchOutlinedIcon/>
            <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon/>
        <EmailOutlinedIcon/>
        <NotificationsOutlinedIcon/>
        <div className="user">
            <img src="https://i.imgur.com/2tH8Otv.png" alt="" />
            <span>JC Denton</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
