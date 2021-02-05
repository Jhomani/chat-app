import React from 'react';
import "./InfoBar.css";


const InfoBar = () => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img src={onlineIcon} alt="icon" className="onlineIcon" />
      <h3>roomName</h3>
    </div>
    <div className="rightInnerContainer"></div>
    <a href="/"> <img src={closeIcon} alt="close" /> </a>
  </div>
);

export default InfoBar;