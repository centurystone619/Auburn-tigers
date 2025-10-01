import React, { useContext } from 'react'
import { GlobalContext } from '../Context'
import ManageTicketModal from './ManageTicketModal'
import burgerIcon from '../assets/burger.jpg'

const Ticket = () => {
    const{manageBtn,isManageBtn,tickets}=useContext(GlobalContext)
    
  return (
    <div className='h-[90vh]  relative  w-[100vw] bg-[#ffffff]' >


    <div className='px-5'>
 <nav className='justify-between items-center flex text-[21px]  text-[#0e1b25] font-[700] py-1'>
 <p className='text-center '> Tickets</p>
 <div><img src={burgerIcon} alt="burger"  className='scale-60'/></div>
    </nav>
    
    

      <div className='  '>

<div className='w-full   pb-2  rounded-lg'>
    <h1 className='text-start text-[#0e1b25] pt-3 text-[13px] font-[500] '>Manage Tickets</h1>
    <div className='pt-8 w-full '>
        <ul className='text-center space-y-2   text-[12px] font-bold text-white w-full '>
            <li className=' mb-2 py-3 w-full ' style={{ background: `#f26522` }} onClick={manageBtn}>BUY TICKETS</li>
            <li className=' mb-2 py-3' style={{ background: `#f26522` }} >MY ACCOUNT</li>
        </ul>
    </div>
</div>
      </div>
    </div>
    
   
      {isManageBtn && <div className='absolute top-0 h-[100%] bg-blue-400 w-[100vw]'><ManageTicketModal/></div>}
    </div>
  )
}

export default Ticket
