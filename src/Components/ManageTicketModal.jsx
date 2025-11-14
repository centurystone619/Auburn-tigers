import  { useContext,  } from 'react'
import { GlobalContext } from '../Context'
import sellseatgeek from '../assets/sell.PNG?url';
import Transfer from './Transfer';
import loadingGIF from '../assets/loading.mp4'
import ticketIcon from '../assets/Footix.jpg'
import backIcon from '../assets/back.png'
import appleWallet from '../assets/applewallet.jpg'




const ManageTicketModal = () => {
    const{isLoading,returnToManageBtn,tickets,handleEventClick,firstEvents,isIndexSelected,eventIndex,setIsTransferOpen,isTransferOpen,currentIndex,transX,handleTicketbtn,handleIndexClose}= useContext(GlobalContext)


  return (

<div>
<div>
    {isIndexSelected ? (
        <div className=''>
 
 <div className='  relative h-[90vh] bg-[#f4f5f9] w-[100%]'>
 <nav className='flex h-[8vh] items-center bg-black px-5' style={{ background: tickets[0][0].transfers.color || `black` }}>
 <button className='w-1/12 ' onClick={handleIndexClose}><img src={backIcon}/></button>  <header className='w-10/12 text-center flex items-center justify-center ' > <div className=' w-2/12'>  <img src={tickets[0][0].transfers.teamLogo} className=''/> </div></header>
  <p className='w-1/10'></p>
 </nav>
 
 <section className='h-[82vh]'>
 <div className=''>
  <ul className='mt-2  h-[30vh]  mx-3 '>
    {/* <li className={`h-1/2 rounded-tr-4xl rounded-tl-4xl relative ${eventIndex[0].transfers.color}`}  style={{backgroundImage:`url(${eventIndex[0]?.transfers.teamLogo})`, backgroundRepeat:`no-repeat`, backgroundPosition:`center bottom`, backgroundSize:`80% 180px`, backgroundColor:eventIndex[0].transfers.color  }}>
    
   
      {eventIndex[0].eventData.dayMonthYear ? <p className=' absolute my-5 text-white ml-5 bg-black w-fit px-2 rounded-full flex text-[12px] font-[600]'>{eventIndex[0].eventData.dayMonthYear}</p> :  <p className=' absolute my-5 text-white ml-5 bg-black w-fit px-2 rounded-full flex text-[12px] font-[600]'>
      {eventIndex[0].eventData.sportsdow.toUpperCase()} <em className="">•</em> {eventIndex[0].time.toUpperCase()} </p>}
      </li> */}


      <li className={`h-1/2 relative rounded-tr-4xl rounded-tl-4xl flex items-center justify-center overflow-hidden  `}  style={{background:`${eventIndex[0].transfers.color}`}} >
<div className=''><img src={eventIndex[0]?.transfers.teamLogo} className='h-[19vh] '/></div>

<div className='absolute  border-8 top-0 left-0  '>
    <div className='font-[600] text-[11px] text-nowrap'>
{eventIndex[0].eventData.dayMonthYear ? <p className='   text-white ml-5 bg-black w-fit px-2 rounded-full flex  top-20'>{eventIndex[0].eventData.dayMonthYear}</p> :  <p className=' absolute my-5 text-white ml-5 bg-black w-fit px-2 rounded-full flex '>
      {eventIndex[0].eventData.sportsdow.toUpperCase()} <em className="px-[2px]"> • </em> {eventIndex[0].time.toUpperCase()} </p>}
    </div>
      
    </div>  
      </li>

  
    
    <li className='h-1/2 flex bg-white rounded-br-4xl rounded-bl-4xl'>
    <ul className='w-10/12 px-5 mt-3 '>
<li className='text-[#84868b] font-[600]  text-[13px]' >{eventIndex[0].eventType}</li>
<li className='text-[#212329] font-[700] text-[16px] leading-none my-1'>{eventIndex[0].artiste}</li>
<li className='flex items-center'>
    
  <p className=" text-[#84868b] font-[500] text-[13px]"> {eventIndex[0].eventData.sportsdow}, {eventIndex[0].eventData.month} {eventIndex[0].eventData.day}, {eventIndex[0].eventData.year} <em className="">•</em> {eventIndex[0].time.toUpperCase()}</p>
   </li>
   <li className='text-[#84868b] font-[500] text-[14px] '>{eventIndex[0].venue}</li>
</ul>



<div className=' w-2/12 flex ' style={{marginTop:eventIndex[0].eventType? `35px`:`18px` }}>


 
  <p><img src={ticketIcon} className='w-5 mt-1 mx-2'/></p>
  <p className='text-center'>{eventIndex.length}</p>

</div>
    </li>
  </ul>
 </div>


  <div className='flex flex-col h-[45vh]  my-5 mx-3 overflow-x-hidden bg-white '>



<div className="flex items-center justify-between px-4">
<h1 className="text-[18px] font-bold py-8">My Tickets</h1>
  </div>


<div className="relative flex h-[50%] overflow-hidden  w-[100%]">
  <div className='  absolute  '>
 <div className='flex '    style={{
        transform: `translateX(${transX})`,
        transition: 'transform 0.3s ease-in-out',
      }}> {eventIndex.map((subArray,index)=>{
      return(
    

      <ul key={index} className="flex-shrink-0  w-70 mx-1 h-[20vh]     "  style={{ width: '80vw '  ,  
        // marginLeft: index === 0 ? '30px' : '10px', 
        // marginRight: index === eventIndex.length - 1 ? '0px' : '0' 
        }} >
        {/* <li className='h-1/2 w-full rounded-tl-2xl rounded-tr-2xl' style={{ background: tickets[0][0].transfers.color || `black` }} > */}

          <li className='h-1/2 w-full rounded-tl-[10px] rounded-tr-[10px]' style={{background:tickets[0][0].transfers.ticketColor || tickets[0][0].transfers.color }} >
        <ul className={`text-white    `}>
                        <li className={`text-center text-[11px] ${!subArray.sec? 'pt-1':`pt-1`}  ${!subArray.sec? 'pb-2':`pb-1`}`}>{index + 1} / {eventIndex.length}</li>
                        <li>  {subArray.transfers?.GA? ( 
<div className="flex flex-col items-center justify-center text-center text-azure-white bg-transparent w-full mt-1 px-1">
    {/* First line with SEC and ROW if they exist */}
    <div className="flex items-center justify-center">
      {subArray.sec && (
        <div className="flex items-center">
          <p className="text-center text-nowrap text-[13px] font-[600]">
            {subArray.sec}
          </p>
        </div>
      )}
        {/* {subArray.sec && !subArray.row && <em className="mx-1">•</em>} */}

      {subArray.row && (
        <div className="flex items-center">
          <em className="mx-1">•</em>
          <p className="text-center text-nowrap font-[600] text-[13px]">
            {subArray.row}
          </p>
        </div>
      )}

      {subArray.sec &&  <em className="mx-1">•</em>}
    </div>

    {/* Second line centered for GA */}
    <div className="flex items-center justify-center mt-1">
      <p className="text-center font-[600] text-[13px]">
        {subArray.transfers?.GA}
      </p>
    </div>
  </div>
            
            
            ): (  
              //  <div className="flex items-center justify-center text-center text-azure-white   bg-transparent w-full" >
              //   <div>
              //     <p id="sec-GA" className="text-[10px] ">
              //       SEC
              //     </p>
              //     <p id="num" className="text-center text-nowrap text-[16px] font-[600]">
              //       {subArray.sec}{" "}
              //     </p>
              //   </div>
              //   <div>
              //     {subArray.row && (
              //       <div>
              //         {" "}
              //         <p id="sec-GA" className="text-center text-[10px]">
              //           ROW
              //         </p>
              //         <p id="num" className="text-center text-nowrap text-[16px] font-[600] ">
              //           {subArray.row}
              //         </p>
              //       </div>
              //     )}
              //   </div>
              //   <div>
              //     {subArray.seat && (
              //       <div className="text-nowrap text-center">
              //         {" "}
              //         <p id="sec-GA" className="text-[10px] ">
              //           SEAT
              //         </p>
              //         <p id="num" className="text-center text-nowrap text-[16px] font-[600]">
              //           {subArray.seat}
              //         </p>{" "}
              //       </div>
              //     )}
              //   </div>
              // </div>
              

              <ul className='flex items-center justify-center mt-2 text-[13px] font-[600]'>
                <li>
                  {subArray.level && <div className='flex'>
                    <p>{subArray.level}</p>
                    <em className="mx-1">•</em>
                    </div>}
                </li>

              <li>
                  {subArray.row && <div className='flex'>
                                      <p>Section</p>

                    <span className='ml-1'>{subArray.sec}</span>
                    <em className="mx-1">•</em>
                    </div>}
                </li>
                   <li>
                  {subArray.row && <div className='flex'>
                                      <p>Row</p>

                    <span className='ml-1'>{subArray.row}</span>
                    <em className="mx-1">•</em>
                    </div>}
                </li>
                      <li>
                  {subArray.seat && <div className='flex'>
                   <p>Seat</p>
                    <span className='ml-1'>{subArray.seat}</span>
                    </div>}
                </li>
              </ul>
              
              )}
              </li>
                      </ul>
        </li>
        <li id='shadow' className='h-1/2 w-full flex items-center justify-center rounded-bl-[10px] rounded-br-[10px]'>
        <div><img src={appleWallet} className='w-28'/></div>
        </li>
      </ul>
      )
    })}</div>
  </div>
 


</div>





   
    <div className='flex items-center justify-center '>
    <div className="flex justify-center  ">
        {eventIndex.map((_, index) => (
          <button
            key={index}
            onClick={() => handleTicketbtn(index)}
            className={` mr-1 rounded-full cursor-pointer border-4 h-2 w-2 ${index === currentIndex ? 'bg-black' : 'bg-gray-300'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
        </div>

        <ul  className='flex mt-3  px-5 text-center font-[500] '>
                        <li id='btn-border' className='w-1/2 mx-1 rounded-sm py-1'><button onClick={()=>setIsTransferOpen(true)}>Transfer</button></li>
                        <li className='w-1/2 mx-1 rounded-sm py-1' id='btn-border'><button>Sell On Seatgeek</button></li>
                    </ul>

  </div>
 </section>
  </div>

        
            
    </div>) :
     (<div>
        {isLoading? (<div className='bg-[#f3f4fa] h-[100vh]'><img src={loadingGIF}/></div>) :(<div>
            <nav className='flex h-[8vh] items-center px-5 ' style={{ background: tickets[0][0].transfers.color || `black` }}>
         <button className='w-1/12 ' onClick={returnToManageBtn}><img src={backIcon}/></button>  <header className='w-10/12 text-center flex items-center justify-center ' > <div className=' w-2/12'>  <img src={tickets[0][0].transfers.teamLogo} className=''/> </div></header>
          <p className='w-1/10'></p>
         </nav>

         <div className='relative h-[82vh] bg-[#f4f5f9]  overflow-y-auto px-3'>
             <div className='  '>
                    <ul className='space-y-3 mt-4'>
                        <li className='rounded-2xl  bg-[#ffffff] px-5 py-5'>
                            <ul >
                                <li className='text-[#84868b]  text-[14px]'>My Account</li>
                                <li className='text-[#212329] font-bold text-[17px]'> {eventIndex[0].yourName}</li>
                                <li className='text-[#212329] text-[14px] font-[500]'>{eventIndex[0].yourMail}</li>
                            </ul>
                        </li>
            
                        <li 
              className=' my-5 h-[30vh] rounded-2xl ' 
              style={{ 
                backgroundImage: `url(${sellseatgeek})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor:'#ffffff'
              }}
            >
              
            </li>
            
                        <li className='h-2/6  bg-[#ffffff] rounded-2xl py-5 px-5'>
                            <h1 className='text-[#212329] font-[700] text-[17px]'>My Upcoming Events</h1>
                   
            
         

                              <div >
                               {tickets.length === 0 ?(  <p className="text-center text-gray-500">No upcoming events</p>):(
                                <div className=''>
{firstEvents.map(({ artiste, eventType, eventData, time, venue},index)=>{
  return(


<div className='flex justify-between my-5' key={index} onClick={()=>handleEventClick(index)}>
<ul className='w-10/12 '>
  <li className='text-[#84868b] font-[600] text-[13px]'>{eventType}</li>
  <li className='text-[#212329] font-[700] text-[15px] leading-none my-1'>{artiste}</li>
                                         <li className="flex items-center text-[13px] ">
                                           <p className=" text-[#84868b] font-[500]">
                                              {eventData?.sportsdow}, {eventData?.month} {eventData?.day}, {eventData?.year}{' '}
                                             <em className="">•</em> {time?.toUpperCase()}
                                           </p>
                                         </li>
                                         <li className='text-[#84868b] font-[500] text-[14px]'>{venue}</li>
</ul>
<div className=' w-2/12 flex mt-6' >


 
  <p><img src={ticketIcon} className='w-6 mt-1 mx-2' /></p>
  <p className='text-center'>{tickets[index].length}</p>

</div>
  </div>
  )
  

})}


                                  
                                </div>
                               )}
                              </div>
            
                        </li>
                        <li className='flex items-center justify-center text-[#212329] font-[500] underline my-10'>Delete My Account</li>
                    </ul>
            
                     
                  </div>
            </div>
        </div>)}
     </div>)}
</div>

{isTransferOpen && <Transfer/>}
</div>





  )
}

export default ManageTicketModal
