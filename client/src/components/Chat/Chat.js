import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import "./Chat.css"

import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import TextContainer from "../TextContainer/TextContainer";

let socket;

let connectionOptions = {
  "force new connection": true,
  "reconnectionAttempts": "Infinity",
  "timeout": 10000,
  "transports": ["websocket"],
  auth: {
    userId: 2
  }
}

const Chat = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState('');

  const ENDPOINT = "localhost:5000"

  useEffect(() => {
    const { name, room } = queryString.parse(window.location.search);
    socket = io(ENDPOINT, connectionOptions);

    setName(name);
    setRoom(room);

    socket.emit("join", {  room, joingTo: 3 }, err => console.log(err));
    console.log(socket);

    return () => {
      socket.disconnect();
      console.log('left')
    }
  }, []);

  useEffect(() => {
    socket.on('message', msg => {
      setMessages([...messages, msg]);
    })

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  console.log(message, messages);

  const sendMessage = ev => {
    ev.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(''));
    }
  }


  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          setMessage={setMessage}
          sendMessage={sendMessage}
          message={message}
        />
      </div>
      <TextContainer users={users} />
    </div>
  )
}

export default Chat;
