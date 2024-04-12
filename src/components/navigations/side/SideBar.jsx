import React from 'react';
import { AiFillSetting, AiFillHome, AiFillProfile, AiOutlineUser } from 'react-icons/ai';
import Links from '../../links/Links';
import "./SideBar.css"

const SideBar = () => {

  const path = [
    { to: "/", label: "Home", icon: <AiFillHome /> },
    { to: "/settings", label: "Settings", icon: <AiFillSetting /> },
    { to: "/about", label: "About", icon: <AiFillProfile /> },
    { to: "/user", label: "User", icon: <AiOutlineUser /> },
    { to: "/admin", label: "Admin", icon: <AiOutlineUser /> }
  ]
  return (
    <div id='sideBarContainer'>

      {/* <Links to={"/"} label={"Home"} />
      <Links to={"/about"} label={"About"} />
      <Links to={"/admin"} label={"Admin"} />
      <Links to={"/user"} label={"User"} />
      <Links to={"/settings"} label={"Settings"} /> */}

      {
        // Destructuring
        path.map(({to, label, icon}) => {
          return (
            <Links key={label} to={to} label={label} icon={icon} />
          )
        // path.map((link, index) => {
        //   return (
        //     <Links key={index} to={link.to} label={link.label} icon={link.icon} />
        //   )
        })
      }
    </div>
  )
};

export default SideBar;
