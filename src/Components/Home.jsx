import React, { useContext, useState } from 'react'
import { GlobalContext } from '../Context'
import storyIcon from '../assets/storyicon.jpg'
import {stories} from '../homedata'


const Home = () => {
    const{tickets}= useContext(GlobalContext)
    
    const [storiesData,setStoriesData] = useState(stories)
   
    
  return (
    <div className='' >
       <header className="flex items-center justify-center  h-[20vh]" style={{ background: tickets[0][0].transfers.color || `black` }}>
     
     <div className=' w-3/12'>  <img src={tickets[0][0].transfers.teamLogo}/> </div>
  </header>
<section  className="h-[70vh]  overflow-hidden bg-white ">


<div className='-mt-2 mx-4'>


{storiesData.map((story,index)=>(
<div id='#homeabsolute ' className="h-[30vh]  my-4 relative  text-white " key={index} style={{backgroundImage:`url(${story.img})`, backgroundRepeat:`no-repeat`, backgroundSize:"cover"}}>

  <div className='pt-5'><p className='bg-white text-black text-[10px] py-1 font-[800] w-fit px-2 rounded-r-4xl flex items-center'><span className='mr-3'><img src={storyIcon} className='w-3'/></span> <span>STORY</span></p></div>
 <div  className=' '> <div  className=' absolute bottom-0 '> 
  <ul id='homeabsolute'  className='px-5 space-y-2  pb-2 text-grey-200 '>
              <li className='font-semibold text-[11px] text-grey-200'>{story.sportType} <em className="mx-1">•</em> {story.time}</li>
              <li className='leading-none font-bold text-[18px]'>{story.topic}</li>
        { story.summary &&     <li className='leading-none text-[11px]'>{story.summary.substring(0, 50)} ...</li>}
            </ul>
  </div></div>
</div>
))}
</div>
</section>
    </div>
  )
}

export default Home
