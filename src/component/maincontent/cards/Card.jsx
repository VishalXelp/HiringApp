import React, { useState } from "react";
import { BiMessageAltDetail } from "react-icons/bi";
import { AiOutlinePaperClip } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
//import CardModal from "../../modal/CardModal"
import Modal from "react-modal";

function Card(props) {
  let [showe, setShowe] = useState(false);

  const handleShow = () => setShowe(true);

  const handleClose = () => {
    setShowe(false);
    console.log("myamsdafd")
   
  }

  const handleClosed = () => {
    console.log(showe);
  }

  //code for drag and drop in JS .
  const dragStart = (e) => {
    const target = e.target;

    e.dataTransfer.setData("card_id", target.id);

    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  const CardModal = () => {
    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        padding: "0px",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
      },
    };

    return (
      <div>
        <Modal isOpen={showe} style={customStyles}>
          <div className=" bg-red-400 p-8">
            <p className="ml-64 -mt-6">X</p>
            <p> modal open ,</p>

            <button
              onClick={handleClose}
              className="bg-gray-400 p-1 rounded m-1 text-xl"
            >
              Close
            </button>

            {/* <button
              onClick={handleClosed}
              className="bg-gray-400 p-1 rounded m-1 text-sm"
            >
              Close
            </button> */}
          </div>
        </Modal>
      </div>
    );
  };

  

  return (
    <div
      onClick={handleShow}
      //id={props.id}
      draggable={true}
      onDragStart={dragStart}
      onDragOver={dragOver}
      className="bg-gray-300 ml-2 mr-2 mt-1 mb-1 rounded-lg h-20 hover:scale-105 cursor-pointer hover:bg-violet-400"
    >
     {
        showe ? CardModal() : ""
       
      }
      <div className="text-sm mt-2 ml-2 flex flex-row ">
       {props.name}<p className="ml-20 "></p>{" "}
      </div>
      <div className="text-xs ml-2 text-gray-700  ">06 Days Ago</div>
      <div className="flex flex-row ml-2 mt-2 ">
        <div className="text-xs text-gray-700 ">
          {" "}
          <div className="flex flex-row pt-1 pb-1 pr-1 hover:text-gray-100 hover:scale-105">
            {" "}
            <BiMessageAltDetail size={15} color="#696969" /> &nbsp; <p> 02</p>{" "}
          </div>{" "}
        </div>
        <div className="text-xs text-gray-700 ">
          {" "}
          <div className="flex flex-row p-1 pl-2 hover:text-gray-100 hover:scale-105">
            {" "}
            <AiOutlinePaperClip size={15} color="#696969" /> &nbsp; <p> 02</p>
          </div>{" "}
        </div>
        <div className="text-xs text-gray-700 ml-10 ">
          {" "}
          <div className="flex flex-row p-1 hover:text-gray-100 hover:scale-105 ">
            {" "}
            <AiOutlineHeart
              className="hover:scale-105"
              size={15}
              color="#696969"
            />{" "}
            &nbsp; <p> 02</p>{" "}
          </div>{" "}
        </div>
       
      </div>

      
    </div>
    
  );
}

export default Card;
