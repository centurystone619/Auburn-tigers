import React, { useContext, useState } from 'react'
import { GlobalContext } from '../Context'
import storyIcon from '../assets/storyicon.jpg'
import {story} from '../homedata'
import homeLogo from '../assets/authomeicon.jpg'
import notifIcon from '../assets/notificon.jpg'
import favoritesIcon from '../assets/favorites.jpg'



const Home = () => {
    const{tickets}= useContext(GlobalContext)
    
    const [news,setNews] = useState(story)
   
    
  return (
    <div className='bg-[#f3f4f8]' >
       <header className="flex items-center justify-center  h-[8vh] py-2 px-3">
     
     <div className=' w-full'> 
     <ul className='flex justify-between items-center w-full'>
      <li className='w-2/12'></li>
      <li className='flex-1 '>
        <p className='flex items-center justify-center '><img src={homeLogo} className='w-14'/></p>
      </li>
      <li className='w-2/12'><img src={notifIcon}/></li>
     </ul>
      </div>
  </header>
<section  className="h-[81vh]  overflow-hidden  px-5 ">

  <div className='border-2 h-[62vh] relative rounded-[10px]' style={{backgroundImage:`url(${news.img})`,backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
    <div className='absolute bottom-0 border-8  w-full pb-5'>
<ul className='px-3 text-[#ffffff] text-wrap flex flex-col items-center justify-center'>
  <li className='text-[18px] font-[500] text-center'>{story.topic}</li>
  <li className='my-3'><button className='bg-orange-500 px-2.5 rounded-sm py-1.5'>Read More</button></li>
  <li>
    <ul className='pb-3 flex'>
      <li id='activebtn'></li>
      <li id='notactivebtn' className='mx-1'></li>
      <li id='notactivebtn'></li>
    </ul>
  </li>
</ul>
    </div>
  </div>
  <div className='mt-4'><img src={favoritesIcon}/></div>

</section>
    </div>
  )
}

export default Home
