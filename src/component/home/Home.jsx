
import React from 'react'

import Header from "../header/header"
import Sidebar from "../sidebar/sidebar"
import MainHead from '../mainhead/MainHead'
import HiringTeam from "../hiringTeam/HiringTeam"
import MainContent from "../maincontent/MainContent"
// import {useNavigate} from "react-router-dom"

function Home() {
  // const navigate = useNavigate()
  return (
    
        <div className="bg-gray-200">
      <Header />

      <div className="flex">
        <Sidebar />

        <div className="flex flex-col ">
          <div className="flex  flex-row ml-6 h-52 ">
            <MainHead />
          
          {    //this div down there is for a seprator line between mainhead and hiring team in UI .
            }
            <div className=" flex flex-col border-r-2 ml-6 mt-10 relative border-gray-400 h-24"></div>

            <HiringTeam />
          </div>
          
          {  //main content only - starts---------------------------------------------------------------------
          }
            <MainContent />

        </div>
        {
          //main content close
        }
    
    {/* <button  onClick={() => {
        navigate('/login')
    }}>
      Login
    </button>  */}
     </div>
    </div>
    

  )
}

export default Home