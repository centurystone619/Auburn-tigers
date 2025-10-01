import React, { useContext } from 'react'
import backIcon from '../assets/back.png'
import { GlobalContext } from '../Context'
import phoneIcon from '../assets/phoneselect.jpg'

const SendInfo = () => {
  const {tickets,closeSendInfo}=useContext(GlobalContext)
  return (
    <div className='absolute top-0 h-[100%] bg-purple-300 w-[100%]'>
      {/* <form>
       
        <div>
        <h1>Transfer To</h1>
        <img src=''/>
        </div>

        <ul>
            <li className='flex flex-col'>
                <label>Firstname</label>
                <input type='text' className='border-2'/>
            </li>
            <li className='flex flex-col'>
                <label>Last Name</label>
                <input type='text' className='border-2'/>
            </li>
            <li className='flex flex-col'>
            <label  className="block mb-1 font-semibold">Mobile Number *</label>
                <input type="tel" id="mobileNumber" name="mobileNumber" 
                       placeholder="(___) ___-____" className="w-full p-2 border border-gray-800 rounded pl-10"/>
            </li>
            <li>  <a href="#" className="text-blue-500 hover:underline">Use Email Instead</a></li>
        </ul>
      </form> */}
<div className=' h-[90vh] bg-[#f4f5f9]'>
     <nav className='flex h-[8vh] items-center bg-black pl-5 ' style={{ background: tickets[0][0].transfers.color || `black` }}>
     <button className='w-1/12 ' onClick={closeSendInfo}><img src={backIcon}/></button>  <header className='w-10/12 text-center flex items-center justify-center ' > <div className=' w-2/12'>  <img src={tickets[0][0].transfers.teamLogo} className=''/> </div></header>
      <p className='w-1/10'></p>
     </nav>

<section className='h-[82vh]'>
<form className='bg-white m-5 p-5 rounded-2xl'>
       
       <div>
       <h1  className='font-[700] my-2 text-[18px]'>Transfer To</h1>
      <button id='btn-border' className='text-[#84868b] text-[15px] py-2 font-[600] flex items-center justify-center w-full'><span className='mr-2'><img src={phoneIcon} className='w-4'/></span> 
      <p>Select From Phone Contacts </p>
      </button>
       </div>

       <div className='flex items-center justify-center'>
        <p id='bb' className='w-5/12 '></p>
        <p className='w-2/12 text-center'>or</p>
        <p id='bb' className='w-5/12 '></p>
       </div>

       <ul className=''>
           <li className='flex flex-col my-2'>
               <label className='font-semibold'>First Name</label>
               <input type='text' id='btn-border' className='p-2'/>
           </li>
           <li className='flex flex-col my-4'>
               <label className='font-semibold'>Last Name</label>
               <input type='text' id='btn-border' className='p-2'/>
           </li>
           <li className='flex flex-col '>
           <label  className="block mb-1 font-semibold">Mobile Number *</label>
               <input id="btn-border" type="tel"  name="mobileNumber" 
                      placeholder="(___) ___-____" className=" w-full p-2 border border-gray-800 rounded pl-10 "/>
           </li>
           <li className='my-4'>  <a href="#" className="text-[#84868b]  text-[13px] font-[600] underline">Use Email Instead</a></li>
       </ul>
     </form>

</section>

</div>
    </div>
  )
}

export default SendInfo
