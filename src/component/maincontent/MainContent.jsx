//import { Card } from "@mui/material";
import React, { useState } from "react";
import Application from "./pages/Application";
//import { MdAlignVerticalTop } from "react-icons/md";
//import { RiBarChartHorizontalFill } from "react-icons/ri";
//import CardBox, { CardBoxB, CardBoxC, CardBoxD } from "./cardbox/CardBox";
//import Modal from "react-modal";
import PipeLine from "./pages/PipeLine";
import Description from "./pages/Description";


function MainContent() {

  const [showPipe , setShowPipe] = useState(true);
  const [showDes , setShowDes] = useState(false);
  const [showApp , setShowApp] = useState(false);

const DesClick = () => {
  setShowPipe(false)
  setShowApp(false)
  setShowDes(true)}
const PipeClick = () => {setShowPipe(true)
  setShowApp(false)
  setShowDes(false)}
const AppClick = () => {setShowApp(true)
  setShowPipe(false)
  setShowDes(false)
  
}



const RenderPipe = () => {
  console.log("heya");
return(
  <PipeLine />
    );
}


const RenderDes = () => {return<Description/>}
const RenderApp = () => {return<Application/>}


  return (
    <> <div id="container">
    <div id="content">
      <div className="flex flex-row  ">
        <div className={showDes?" border-b-4 border-red-500 font-bold ml-6 mr-5 cursor-pointer  " : "font-bold ml-6 mr-5 cursor-pointer " }  onClick={DesClick}
        >
          {" "}
          Description
        </div>
        <div 
         className={showPipe?" border-b-4 border-red-500 font-bold ml-6 mr-5 cursor-pointer  " : "font-bold ml-6 mr-5 cursor-pointer " }
         onClick={PipeClick}>
        Pipe-line
        </div>
        <div className={showApp?" border-b-4 border-red-500 font-bold ml-6 mr-5 cursor-pointer  " : "font-bold ml-6 mr-5 cursor-pointer " } onClick={AppClick}>Application</div>
      </div>
   
    {showPipe ? RenderPipe() :""}
    {showDes ? RenderDes() :""} 
    {showApp ? RenderApp() :""}     
          
    </div> 
    </div>
    </>
  );
}

export default MainContent;
