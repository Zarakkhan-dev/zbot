import React, { useEffect, useState } from "react";
import Chat_interface from "./Chat_interface";
import Profile_info from "./Profile_info";
const Chat = () => {
  const [active_menu_icon , SetClassMenuIcon] = useState<string>("none");

  return (
    <>
      <div className="Chat-Interface ">
        <section className="menu bg-[#1b1a1b] w-full h-[10vh] rounded-lg">
          <section className="Menu-items flex justify-end p-5 gap-6 mx-3">
            <div className="chat cursor-pointer">
              <i className={`fa-solid fa-comment-dots fa-xl text-[#8b8c93] ${active_menu_icon ==="chat" ?"active_chat":""  }`} onClick={()=>SetClassMenuIcon("chat")} ></i>
            </div>
            <div className="profile cursor-pointer">
              <i className={`fa-solid fa-user fa-xl text-[#8b8c93] ${active_menu_icon ==="profile" ?"active_profile":""  }`} onClick={()=>SetClassMenuIcon("profile")}></i>
            </div>
          </section>

          {active_menu_icon === "none" ? "" : active_menu_icon === "chat" ? <Chat_interface/> : <Profile_info/>  }
          
        </section>
      </div>
    </>
  );
};

export default Chat;


