import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Links.css"

const Links = ({ to, label, icon }) => {
  return (
    <div id='LinksContainer'>
      <NavLink id='LinksContainerNavLink' to={to}>
        <span>{icon}</span>
        <span id='LinksContainerLabel'>{label}</span>
      </NavLink>
    </div>
  )
};

export default Links;
