import React, { useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

const Chatbot = () => {
  const [respond, setRespond] = useState("");
  const handler = async () => {
    const response = await axios.post("/api/chatbot", {
      querry: "What is computer",
    });
    setRespond(response.data.response);
    const htmlcode = "<div dangerouslySetInnerHTML={{ __html: respond }}/>";
  }
  return (
  <>
  <div className="Chatbot-interface bg-black h-screen overflow-hidden py-2.5 px-4">
    <Sidebar/>
    <Chat/>
  </div>
  </>
  )
};

export default Chatbot;
