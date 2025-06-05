import React, { useContext } from 'react'
import { GlobalContext } from '../Context'
import ManageTicketModal from './ManageTicketModal'

const Ticket = () => {
    const{manageBtn,isManageBtn,tickets}=useContext(GlobalContext)
    
  return (
    <div className='h-[90vh]  relative' style={{ background: tickets[0][0].transfers.btnColor || `black` }}>
      <header className='flex items-center justify-center h-[8vh] text-[16px] text-white font-[700]' style={{ background: tickets[0][0].transfers.color || `black` }}>
       <p className='text-center'> Tickets</p>
      </header>

      <div className=' h-[82vh] flex items-center justify-center '>

<div className='w-5/6  pb-2 bg-white rounded-lg'>
    <h1 className='text-center pt-3 text-[16px] font-bold '>Tickets</h1>
    <div className='pt-8 '>
        <ul className='text-center space-y-2  mx-2 text-[12px] font-bold text-white '>
            <li className=' mb-2 py-3 ' style={{ background: tickets[0][0].transfers.color || `black` }} onClick={manageBtn}>Manage Tickets</li>
            <li className=' mb-2 py-3' style={{ background: tickets[0][0].transfers.color || `black` }} >Purchase Tickets</li>
        </ul>
    </div>
</div>
      </div>
      {isManageBtn && <div className='absolute top-0 h-[100%] bg-blue-400 w-[100vw]'><ManageTicketModal/></div>}
    </div>
  )
}

export default Ticket
