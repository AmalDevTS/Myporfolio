import React from 'react'
import './navbar.css'
import about from '../images/avatar.gif'
import education from '../images/graduation-cap.gif'
import home from '../images/home (1).gif'
import contact from '../images/contact-book.gif'
import projects from '../images/vlogger.gif'
import skills from '../images/activities.gif'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='body'>
      <div className="sidebar">
        <ul>
          <li>
            <Link to={"/"} className="sidebar-item">
              <img src={home} alt="Home" className="sidebar-icon" />
              <span className="sidebar-text">
                <div className='card1'>Home</div></span>
            </Link>
          </li>
          <li>

          </li>
          <li>
            <Link to="/education" className="sidebar-item">
              <img src={education} alt="About" className="sidebar-icon" />
              <span className="sidebar-text">
                <div className='card1'>Education</div></span>
            </Link>
          </li>
          <li>
            <Link to="/skills" className="sidebar-item">
              <img src={skills} alt="About" className="sidebar-icon" />
              <span className="sidebar-text">
                <div className='card1'>Skills</div>
                </span>
            </Link>
          </li>
          <li>
            <Link to="/projects" className="sidebar-item">
              <img src={projects} alt="About" className="sidebar-icon" />
              <span className="sidebar-text">
                <div className='card1'>Projects</div></span>
            </Link>
          </li>
          <li>
            <Link to="/contacts" className="sidebar-item">
              <img src={contact} alt="About" className="sidebar-icon" />
              <span className="sidebar-text">
                <div className='card1'>Contact</div></span>
            </Link>
          </li>

        </ul>
      </div>


    </div>
  )
}

export default Navbar