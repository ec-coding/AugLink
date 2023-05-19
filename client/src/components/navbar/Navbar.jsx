import React, { useContext } from 'react'
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
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';
import Dropdown from "../navbarDropdown/Dropdown"

const Navbar = () => {

  const { toggle, darkMode } = useContext(DarkModeContext)
  const { currentUser } = useContext(AuthContext)

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img src="https://i.imgur.com/w4lLPlJ.png" alt="" />
        </Link>
        <div className='iconHover'>
          <HomeOutlinedIcon />
          <br />
          <h6>Home</h6>
        </div>

        {darkMode ? (
          <div>
            <WbSunnyOutlinedIcon onClick={toggle} />
            <br />
            <h6>Light Mode</h6>
          </div>
        ) : (
          <div>
            <DarkModeOutlinedIcon onClick={toggle} />
            <br />
            <h6>Dark Mode</h6>
          </div>
        )}
        <div>
          <GridViewOutlinedIcon />
          <br />
          <h6>Groups</h6>
        </div>
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <div>
          <PersonOutlinedIcon />
          <br />
          <h6>Friends</h6>
        </div>
          <div>
          <EmailOutlinedIcon />
          <br />
          <h6>Messages</h6>
          </div>
          <div>
          <NotificationsOutlinedIcon />
          <br />
          <h6>Notifications</h6>
          </div>

        <div className="user">
          <Dropdown />
        </div>
      </div>
    </div>
  )
}

export default Navbar
