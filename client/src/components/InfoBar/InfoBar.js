import React from 'react';
import "./InfoBar.css";

import closeIcon from "../../icons/closeIcon.png";
import onlineIcon from "../../icons/onlineIcon.png";

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img src={onlineIcon} alt="icon" className="onlineIcon" />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer"></div>
    <a href="/"> <img src={closeIcon} alt="close" /> </a>
  </div>
);

export default InfoBar;