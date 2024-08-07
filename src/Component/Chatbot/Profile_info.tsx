import React from 'react'

const Profile_info = () => {
  return (
    <section className="profile-interface grid grid-cols-2">
<section className='bg-[#1b1a1b] mt-6  rounded-lg py-5 px-6'>
 <div className="labels flex  justify-between  text-lg">
    <h1 className='text-white font-bold text-xl'>Account </h1>
    <h1 className='text-[#c8479d] font-semibold'>DELETE ACCOUNT</h1>
</div>
<div className="information text-white py-4 flex flex-col gap-3 text-lg">
<h1 className='flex gap-3'>Name : <h1 className='text-[#596fce] font-semibold'>DEMO </h1></h1>
<h1 className='flex gap-3'>Email :  <h1 className='text-[#596fce] font-semibold'>Demo@gmail.com</h1></h1>    
</div>   
</section>
<section className="plan-information">
</section>
</section>
  )
}

export default Profile_info
