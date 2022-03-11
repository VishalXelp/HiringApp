import { PinDropSharp } from "@mui/icons-material";
import React, { useState } from "react";
import Card from "../cards/Card";
import CardB from "../cards/CardB";
import CardC from "../cards/CardC";

function CardBox(props) {
  const drop = (e) => {
    e.preventDefault();

    const card_id = e.dataTransfer.getData("card_id");

    const card = document.getElementById(card_id);
    card.style.display = "block";

    e.target.appendChild(card);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };
 // const myvariable = JSON.parse(localStorage.getItem("jobs"));

 // console.log("my value is ", myvariable);

  return ( <></>
    // <div
    //   id={props.id}
    //   onDrop={drop}
    //   onDragOver={dragOver}
    //   className=" ml-6 mt-6 rounded-lg flex flex-col  mb-6 w-1/5 bg-gray-200 hover:scale-105 hover:bg-gray-100"
    // >
    //   {props.children}

    //   <div className="flex flex-row mt-3">
    //     <p className="text-gray-700 font-medium text-sm ml-4">Screening</p>
    //     <p className="text-gray-700 text-sm ml-20">06</p>
    //   </div>
    //   <div className="border-b-2 border-gray-400 mt-2 mb-2 ml-4 mr-4">
    //     <hr />
    //   </div>

    //   {myvariable.map((data, index) => {
    //     return (
    //       <>
    //         <Card />
    //       </>
    //     );
    //   })}
    //   {/* 
    //   <Card />
    //   <Card /> 
    //   <Card />
    //   <Card />

    //   <Card /> */}
    // </div>
  );
}

export function CardBoxB() {
  return (
    <div
      id="card-box"
      className=" ml-6 mt-6 rounded-lg flex flex-col  mb-6 w-1/5 bg-gray-200 hover:scale-105 hover:bg-gray-100"
    >
      <div className="flex flex-row mt-3">
        <p className="text-gray-700 text-sm font-medium ml-4">Qualified</p>
        <p className="text-gray-700 text-sm ml-20">02</p>
      </div>
      <div className="border-b-2 border-gray-400 mt-2 mb-2 ml-4 mr-4">
        <hr />
      </div>
      <CardB />

      <CardB />
    </div>
  );
}

export function CardBoxC() {
  return (
    <div
      id="card-box"
      className=" ml-6 mt-6 rounded-lg flex flex-col  mb-6 w-1/5 bg-gray-200 hover:scale-105 hover:bg-gray-100"
    >
      <div className="flex flex-row mt-3">
        <p className="text-gray-700 text-sm font-medium ml-4">Interview</p>
        <p className="text-gray-700 text-sm ml-20">04</p>
      </div>
      <div className="border-b-2 border-gray-400 mt-2 mb-2 ml-4 mr-4">
        <hr />
      </div>
      <CardC />
      <CardC />
      <CardC />
    </div>
  );
}

export function CardBoxD() {
  return (
    <div
      id="card-box"
      className=" ml-6 mt-6 rounded-lg flex flex-col  mb-6 w-1/5 bg-gray-200 hover:scale-105 hover:bg-gray-100"
    >
      <div className="flex flex-row mt-3">
        <p className="text-gray-700 text-sm font-medium ml-4">Shortlisted</p>
        <p className="text-gray-700 text-sm ml-20">04</p>
      </div>
      <div className="border-b-2 border-gray-400 mt-2 mb-2 ml-4 mr-4">
        <hr />
      </div>
      <CardB />

      <CardB />
      <CardB />
      <CardB />
    </div>
  );
}

export default CardBox;
