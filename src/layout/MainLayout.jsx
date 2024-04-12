import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/navigations/side/SideBar';
import NavBar from '../components/navigations/top/NavBar';
import "./MainLayout.css"

const MainLayout = () => {
  return (
    <div id='mainLayoutContainer'>

      <div id='mainLayoutSideBar'>
        <SideBar />
      </div>

      <div id='mainLayoutRightContainer'>

        <div id='mainLayoutNavBar'>
          <NavBar />
        </div>

        <div id='mainLayoutOutlet'>
          <Outlet />
        </div>

      </div>

    </div>
  )
}

export default MainLayout
