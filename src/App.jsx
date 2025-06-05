import { useContext } from "react"
import Home from "./Components/Home"
import { GlobalContext } from "./Context"
import Ticket from "./Components/Ticket"
import Footer from "./Components/Footer"



function App() {
 const {isTicketOpen,setIsTicketOpen,homeBtn}= useContext(GlobalContext)

  return (
<main className="font-sans ">

{isTicketOpen ? (<Ticket/>):(<Home/>)}

<Footer/>
</main>
  )
}

export default App
