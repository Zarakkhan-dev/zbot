import React, { useState, useEffect } from "react";
import axios from "axios";
interface chatdatatype {
  user: string;
  bot: string;
}
const Chat_interface = () => {
  const [user_input, setUser_input] = useState<string>("");
  const [conversation, Setconversation] = useState<chatdatatype[]>([
    { user: "", bot: "" },
  ]);
  const [respond, setRespond] = useState<string>("");
  const handler = async () => {
    const response = await axios.post("/api/chatbot", {
      querry: user_input,
    });

    if (response.status === 200) {
      Setconversation([
        ...conversation,
        { user: user_input, bot: response.data.response },
      ]);
    }
    setUser_input("")
  };
  return (
    <>
      <section className="Chat-interface mt-5 rounded-lg">
        <div className="chat h-[70vh] mb-3 flex flex-col gap-3 overflow-y-auto pb-3">
          {conversation.length === 1 ? 
             <div className="querry-message bg-[#a1439d] self-end p-2  text-white max-w-[60%]">
             {user_input}
           </div> : (
            <>
             {conversation.slice(1).map((items)=>{
                return(
                    <>
                    <div className="querry-message bg-[#a1439d] self-end p-2  text-white max-w-[60%]">
                    {items.user}
                  </div>
                  <div className="querry-bot-reply bg-[#d4d4d4] self-start p-2  text-black max-w-[60%]">
                    <div dangerouslySetInnerHTML={{ __html: items.bot }} />
                  </div>
                  </>
                )
             })}
            </>
          )}
        </div>
        <div className="inputs bg-[#1b1a1b] py-3  rounded-md flex px-3">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your prompt here ..."
            className="outline-none  bg-[#1b1a1b] text-white w-full"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUser_input(e.target.value)
            }
            value={user_input}
          />
          <button onClick={handler}>
            <i className="fa-solid fa-location-arrow fa-xl text-white mr-2"></i>
          </button>
        </div>
      </section>
    </>
  );
};

export default Chat_interface;
