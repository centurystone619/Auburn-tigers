import React, { useContext, useState } from 'react'
import { GlobalContext } from '../Context'
import HomeActiveIcon from '../assets/homeactive.jpg'
import HomeNotActiveIcon from '../assets/homef.jpg'
import liveIcon from '../assets/liveicon.jpg'
import bigFicon from '../assets/fbigicon.jpg'
import ticketactivef from '../assets/myftixactive.jpg'
import ticketnotactivef from '../assets/auftix.jpg'
import  sportsf from '../assets/sportsf.jpg'



const Footer = () => {
    const {setIsTicketOpen,homeBtn,tickets,isTicketOpen}=useContext(GlobalContext)
    
  return (
    <footer className=' h-[10vh] flex items-center justify-center w-[100vw] bg-[#ffffff]  ' >
  {/* <ul className="flex justify-around items-center text-[7px] text-white font-bold transform ">
    <li onClick={homeBtn} className='flex items-center flex-col w-1/5 h-full '  style={{ 
    background: !isTicketOpen ? tickets[0][0].transfers.btnColor :'', // Darker when active, lighter when inactive
    // color: isTicketOpen ? '#ffffff' : '#000000',      // White text when active, black when inactive
    cursor: 'pointer'                                 // Indicates it’s clickable
  }}>
        <span className=' '><img src={HomeIcon} className='w-5 pt-4 '/></span>
     <span className='pb-4 pt-1'>HOME</span></li>
    <li className='flex items-center flex-col w-1/5  '>
        <span><img src={CalendarIcon}  className='w-5 '/></span>
        <span className='pt-1 '>SCHEDULE</span>
        </li>
     <li className='flex items-center flex-col w-1/5'><span><img src={LiveIcon}  className='w-8'/></span>
     <span className='pt-1'>MEDIA</span></li> 
     <li onClick={()=>setIsTicketOpen(true)} className='flex items-center flex-col w-1/5 h-full'  style={{ 
    background: isTicketOpen ? tickets[0][0].transfers.btnColor :'', // Darker when active, lighter when inactive
    // color: isTicketOpen ? '#ffffff' : '#000000',      // White text when active, black when inactive
    cursor: 'pointer'                                 // Indicates it’s clickable
  }}><span className='pt-4'><img src={ticketIcon}  className='w-6'/></span>
     <span className='pb-4 pt-1'>TICKETS</span></li>
      <li className='flex items-center flex-col w-1/5'><span className='py-2'><img src={more}  className='w-4'/></span>
      <span className=''>MORE</span></li>
  </ul> */}


  <ul className='flex justify-around items-center    w-[90vw] ' style={{paddingBottom:`${isTicketOpen && '21px'}`}}>
    <li className='w-1/5 px-1' onClick={homeBtn}>
    {isTicketOpen? (<img src={HomeNotActiveIcon} className='pt-3'/>):(<img src={HomeActiveIcon} className='-mt-1'/>)}
    </li>
    <li  className='w-1/5 px-1 pt-3'><img src={liveIcon} className='-pt-1 '/></li>
    <li  className='w-1/5 px-1'><img src={bigFicon}/></li>
    <li  className='w-1/5 px-1' onClick={()=>setIsTicketOpen(true)}>
    {isTicketOpen? (<img src={ticketactivef} className='pt-2'/>):(<img src={ticketnotactivef} className='pt-3'/>)}</li>
    <li  className='w-1/5 px-1 '><img src={sportsf} className='pt-2'/></li>
  </ul>
</footer>
  )
}

export default Footer
