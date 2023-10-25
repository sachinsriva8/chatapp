"use client";
import { useState } from "react";
import { io } from "socket.io-client";

const FirstUser = () => {
  const [message, setMessage] = useState("");

  let socket = io("http://localhost:4000/user/socket");

  const handelSend = async () => {
    // await socket.emit("message", message);
    await socket.emit("message", [message]);
    setMessage("");
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        name="message"
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handelSend}>Send</button>
    </div>
  );
};

export default FirstUser;
