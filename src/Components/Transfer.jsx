import React, { useContext } from 'react'
import { GlobalContext } from '../Context'
import SendInfo from './SendInfo'
import backIcon from '../assets/back.png'


const Transfer = () => {
    const {tickets,eventIndex,handleCheckboxChange,handleSelectAll,handleSubmit,selectedItems,setSendForm,sendForm,closeTransfer}= useContext(GlobalContext)
     const {transfers,sec,row,seat,type}=eventIndex[0]
     const ticketList = transfers.ticketId ? transfers.ticketId : transfers.seats;
  return (
    <div className='absolute top-0 h-[100%]  w-[100%]'>
<div className=' h-[90vh] bg-[#f4f5f9]'>
     <nav className='flex h-[8vh] items-center bg-black px-5' style={{ background: tickets[0][0].transfers.color || `black` }}>
     <button className='w-1/12 ' onClick={closeTransfer}><img src={backIcon}/></button>  <header className='w-10/12 text-center flex items-center justify-center ' > <div className=' w-2/12'>  <img src={tickets[0][0].transfers.teamLogo} className=''/> </div></header>
      <p className='w-1/10'></p>
     </nav>

     <section className=' h-[82vh] overflow-y-auto'>
     <ul className=' bg-white rounded-2xl m-5 p-5'>

     <h1 className='font-[700] my-2 text-[17px]'>Select Tickets to Transfer</h1>
    
   <li>
            
            <ul id='btn-border' className='rounded-lg'>
                <li className='flex  py-4 bg-[#f4f5f9] px-4'>
                    <ul className='w-9/12 '>
                    <li className='text-[#212329] font-[700] text-[15px] leading-none my-1'>{eventIndex[0].artiste}</li>
                        <li><p className=" text-[#84868b] font-[500] text-[11px]"> {eventIndex[0].eventData.sportsdow}, {eventIndex[0].eventData.month} {eventIndex[0].eventData.day}, {eventIndex[0].eventData.year} <em className="">•</em> {eventIndex[0].time}</p></li>
                        
                        <li className='text-[#84868b] font-[500] text-[13px] '>{eventIndex[0].venue}</li>
                    </ul>
                  <div>  <p className='text-center bg-black text-white rounded-full text-[12px] py-1 px-3'>{selectedItems.length} / {eventIndex.length}</p></div>
                </li>
                <li>

          


                <form className="py-3" onSubmit={handleSubmit} >
          

                <ul className='px-5'>
                    <li className='flex items-center '>
                  
                        <div> <input
                      type="checkbox"
                      checked={selectedItems.length === ticketList.length && ticketList.length > 0}
                      onChange={handleSelectAll}
                      className="w-[14px] h-[14px] mt-1  rounded-sm checked:bg-black checked:border-black focus:ring-black"
                    /></div>
                        <p className="ml-2 text-[14px]  font-[500]">Select All</p>
                    </li> 

                    {eventIndex[0].seat && <ul className='flex font-[700] text-[14px] pt-3 '>
                   { eventIndex[0].level && <li>{eventIndex[0].level} <em className="mx-1">•</em></li>}
                   {eventIndex[0].sec && <li>Section {eventIndex[0].sec} </li>}
                   {/* { eventIndex[0].row && <li>Row {eventIndex[0].row} <em className="mx-1">•</em></li>}
                     {eventIndex[0].seat && <li>Seat {eventIndex[0].seat}</li>} */}
                    </ul>}


                    {ticketList.map((ticket,index)=>{
                        return(
<li key={index} className='flex items-start my-4  '>
    <div className='flex items-center   '>   <input
                        type="checkbox"
                        checked={selectedItems.includes(index)}
                        onChange={() => handleCheckboxChange(index)}
                        className="w-[14px] h-[14px] border-2 border-black rounded-sm checked:bg-black checked:border-black focus:ring-black translate-y-1"
                      /></div>

{/* <div className="ml-2 ">
  {transfers.GA || transfers.ticketId ? (
    sec ? (
      <ul className="flex flex-col pt-[45px] font-[500] text-[14px]">
        <li><span><em className='text-[#84868b]'>Sec </em> {sec}</span></li>
        <li className="leading-tight text-[#84868b]">
          {transfers.GA && transfers.GA.toUpperCase()} 
          {type && <em className="mx-1">•</em>} 
          {type && type.toUpperCase()}
        </li>
      </ul>
    ) : (
      <ul className="flex flex-col pt-[45px] font-[500] text-[14px]">
        <li>{transfers.GA}</li>
        <li className="leading-tight text-[#84868b]">
          {transfers.GA && transfers.GA.toUpperCase()} 
          {type && <em className="mx-1">•</em>} 
          {type && type.toUpperCase()}
        </li>
      </ul>
    )
  ) : (
    // <ul className='  mt-4'>
    //   <li className=' '>
    //     <p className='font-[500] text-[14px]'>
    //       <span> <em className='text-[#84868b]'>Sec </em>{sec},</span>
    //       <span className="mx-2"><em className='text-[#84868b]'>Row  </em>{row},</span>
    //       <span> <em className='text-[#84868b]'>Seat  </em>  {ticket}</span>
    //     </p>
    //   </li>
    // </ul>

      <ul className="flex flex-col  font-[500] text-[14px] mt-[45px]">
       <ul className='flex flex-col'>
        <li>
          <ul className='flex'>
             <li><span><em className='text-[#84868b]'>Row </em> {row}</span> <em className="mx-1">•</em></li>
        <li><span><em className='text-[#84868b]'>Seat </em> {seat}</span></li>
          </ul>
        </li>
        <li>
          <ul className='block break-words'>
            <li>Sec {sec} <em className="mx-1">•</em> </li>
            <li>{type}</li>
          </ul>
        </li>
       </ul>
      </ul>
  )}
</div> */}

<div className='  pb-2'>
  <div className="ml-2  w-55  ">
  {transfers.GA || transfers.ticketId ? (
    sec ? (
      <ul className="flex flex-col  font-[500] text-[14px] ">
        <li><span><em className='text-[#84868b]'>Sec </em> {sec}</span></li>
        <li className="leading-tight text-[#84868b]">
          {transfers.GA && transfers.GA.toUpperCase()} 
          {type && <em className="mx-1">•</em>} 
          {type && type.toUpperCase()}
        </li>
      </ul>
    ) : (
      <ul className="flex flex-col pt-[45px] font-[500] text-[14px]">
        <li>{transfers.GA}</li>
        <li className="leading-tight text-[#84868b]">
          {transfers.GA && transfers.GA.toUpperCase()} 
          {type && <em className="mx-1">•</em>} 
          {type && type.toUpperCase()}
        </li>
      </ul>
    )
  ) : (
    // <ul className='  mt-4'>
    //   <li className=' '>
    //     <p className='font-[500] text-[14px]'>
    //       <span> <em className='text-[#84868b]'>Sec </em>{sec},</span>
    //       <span className="mx-2"><em className='text-[#84868b]'>Row  </em>{row},</span>
    //       <span> <em className='text-[#84868b]'>Seat  </em>  {ticket}</span>
    //     </p>
    //   </li>
    // </ul>

      <ul className="flex flex-col  font-[500] text-[14px] h-full  ">
       <ul className='flex flex-col  '>
        <li className='text-start '>
          <ul className='flex'>
             <li className='flex'>Row  {row} <em className="mx-1">•</em></li>
        <li><span><em className=''>Seat </em> {seat}</span></li>
          </ul>
        </li>
        <li>
          {/* <ul className=' text-start inline-flex'>
            <li className='flex flex-nowrap text-start'>Sec {sec}  </li>
            {type && <li><em className="mx-1">•</em></li>}
            <li> {type}</li>
          </ul> */}
 <div className='text-start break-words text-[#84868b] font-[500]'>
            <span>Sec {sec}</span>
            {type && <span><em className="mx-1">•</em> {type}</span>}
          </div>
          
        </li>
       </ul>
      </ul>
  )}
</div>
</div>

</li>
                    )})}
                    
                </ul>

               
              </form>

                </li>
            </ul>
        </li>
    </ul>

     {/* Submit Button */}
   

                {selectedItems.length >= 1 &&   <div className="flex items-center justify-center mt-4 absolute bottom-5 font-[500]  w-[100%]">
                  <button
                    type="submit"
                    onClick={() => setSendForm(true)}
                    className="bg-black text-white px-4 py-2 rounded-md w-11/12"
                    style={{ background: tickets[0][0].transfers.color || `black` }}
                  >
                    Continue ({selectedItems.length <= 1? `${selectedItems.length} Ticket` : `${selectedItems.length} Tickets`})
                  </button>
                </div> }
     </section>
</div>

 
      {sendForm  && <SendInfo/>}
    </div>
  )
}

export default Transfer