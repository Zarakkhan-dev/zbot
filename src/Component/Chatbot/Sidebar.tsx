import React from 'react'

const Sidebar = () => {
  return (
  <>
<div className="chatbot-interface bg-[#1b1a1b] h-[92vh] rounded-lg  ">
  <div className="logo text-center mt-4">
    <h1 className='text-2xl font-bold text-[#a1439d]'>ZBOT</h1>
  </div>
    <div className="button-history-Delete flex justify-between px-3 py-1">
      <h1 className='text-[#cecbce]'>History</h1>
      <h1 className='text-[#eae7ea]'>DELETE ALL</h1>
    </div>
  <section>
    <div className="chat-history h-[60vh] bg-[#313131] mx-3 rounded">

    </div>
    <div className="Sidebar-button flex  flex-col justify-end p-3 gap-2">
    <button className='bg-[#7776B3] py-3 rounded flex justify-center gap-1 items-center'> <i className="fa-solid fa-plus"></i>New Chat</button>
    <button className='py-3 text-white font-bold border border-1 border-white rounded'>LOG OUT</button>
    </div>
  </section>
</div>
  </>
  )
}

export default Sidebar
