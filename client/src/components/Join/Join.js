import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input type="text" placeholder="Name" className="joinInput" onChange={ev => setName(ev.target.value)} />
        </div>
        <div>
          <input type="text" placeholder="Room" className="joinInput" onChange={ev => setRoom(ev.target.value)} />
        </div>
        <Link onClick={ev => (!name || !room) ? ev.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className="button mt-20" type="submit">Sign In</button>
        </Link>
      </div>
    </div>
  )
}

export default Join;