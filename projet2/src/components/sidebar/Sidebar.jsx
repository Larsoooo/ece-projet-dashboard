import React from "react"
import LogoWorldCup from './LogoWorldCup.png'
import "./sidebar.css" 

export default function Sidebar() {
  return (
    <div className="sidebar">
       <div className="sidebarWrapper">
        
        <img src={LogoWorldCup} className="sidebarLogo" alt="logo" />

        <div className="sidebarMenu">
            <ul className="sidebarList">
                <li className="sidebarListItem active">
                <span class="material-symbols-rounded"> dashboard </span>
                Overview
                </li>
            </ul>
        </div>
       </div>

       <div className="topbarWrapper">

        <div className="topRight">
          <div className="topBarIconContainer">
            <span class="material-symbols-outlined"> notifications </span>
            <span className='topIconBadge'>2</span>
          </div>

          <div className="topBarIconContainer">
            <span class="material-symbols-outlined"> language </span>
            <span className='topIconBadge'>2</span>
          </div>

          <div className="topBarIconContainer">
            <span class="material-symbols-outlined"> settings </span>
          </div>

                      
        </div>
        
      </div>
    </div>
  )
}
