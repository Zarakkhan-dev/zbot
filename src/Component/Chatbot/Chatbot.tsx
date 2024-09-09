import React, { useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

const Chatbot = () => {
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
