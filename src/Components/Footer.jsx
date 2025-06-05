import React, { useContext, useState } from 'react'
import { GlobalContext } from '../Context'
import HomeIcon from '../assets/Home.png'
import CalendarIcon from '../assets/cal.png'
import LiveIcon from '../assets/live.png'
import ticketIcon from '../assets/ticketIcon.png'
import more from '../assets/more.png'

const Footer = () => {
    const {setIsTicketOpen,homeBtn,tickets,isTicketOpen}=useContext(GlobalContext)
    
  return (
    <footer className=' h-[10vh]  ' style={{ background: tickets[0][0].transfers.color || `black` }}>
  <ul className="flex justify-around items-center text-[7px] text-white font-bold transform ">
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
  </ul>
</footer>
  )
}

export default Footer
