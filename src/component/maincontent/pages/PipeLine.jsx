
import React, { useState, useEffect } from "react";
import { MdAlignVerticalTop } from "react-icons/md";
import { RiBarChartHorizontalFill } from "react-icons/ri";
//import CardBox, { CardBoxB, CardBoxC, CardBoxD } from "../CardBox/cardbox/CardBox";
import Modal from "react-modal";
import CardBox, { CardBoxB, CardBoxC, CardBoxD } from "../cardbox/CardBox";
import Card from "../cards/Card";

function PipeLine() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [users, setUsers] = useState([
    {
      id: "4",
      Name: "Kovind",
    },
  ]);

  useEffect(() => {
    const jobeys = JSON.parse(localStorage.getItem("jobs"));
    setUsers(jobeys);
  }, []);

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(users));
  }, [users]);

  const handleClick = () => {
    setShow(true);
  };
  const hide = () => {
    setShow(false);
  };

  const addJob = (candidate) => {
    const results = [...users, candidate];
    setUsers(results);
  };

  const AddCandidatesModal = () => {
    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        padding: "0px",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "20px",
      },
    };
   // console.log(name);
    const handleSubmit = () => {
      const FormData = {
        id: "1",
        Name: name,
      };

      addJob(FormData);
    };

    return (
      <>
        <Modal isOpen={show} style={customStyles}>
          <div className="  bg-red-500 p-8 text-black-50 ">
            <p
              onClick={hide}
              className="absolute left-3/4 ml-12 -mt-5 mb-8 cursor-pointer "
            >
              X
            </p>
            <h1 className="text-orange-50 text-2xl  mb-3 mt-8">
              {" "}
              Add Candidates for Jobs{" "}
            </h1>

            <form>
              <input
                type="text"
                className="rounded p-1 m-2 w-11/12 "
                placeholder="Candidate Name "
                value={name}
                onInput={(e) => setName(e.target.value)}
              />
              <br></br>
              <input
                type="text"
                className="rounded p-1 m-2 w-11/12"
                placeholder="Job Location "
                //value={jobLocation}
                //onInput={(e) => setJobLocation(e.target.value)}
              />
              <br></br>
              <p className="mt-2"> </p>
              <div className="flex flex-row mt-2 ml-2 text-orange-50">
                <div className="mr-8">
                  <input
                    type="checkbox"
                    class=" rounded-full checked:bg-gray-500 "
                  />{" "}
                  Full Time{" "}
                </div>
                <div className="mr-8">
                  <input
                    type="checkbox"
                    class=" rounded-full checked:bg-gray-500 "
                  />{" "}
                  Internship{" "}
                </div>
                <div className="">
                  {" "}
                  <input
                    type="checkbox"
                    class=" rounded-full checked:bg-gray-500 "
                  />{" "}
                  Part Time{" "}
                </div>
              </div>
              <select
                className="p-1 m-3 rounded bg-gray-200 w-11/12"
                name="pipe-line"
                id="stage"
              >
                <option value="Screening">Screening</option>
                <option value="Qualified">Qualified</option>
                <option value="Interview">Interview</option>
                <option value="Shortlisted">Shortlisted</option>
              </select>
              <div className="flex flex-row">
                {" "}
                <p className="text-orange-50 mt-4 ml-3 text-base ">
                  {" "}
                  Candidate Resume{" "}
                </p>
                <input
                  className=" m-3 rounded "
                  type="file"
                  id="myFile"
                  name="filename"
                />{" "}
              </div>
              {/* <input
                  type="text"
                  className="rounded p-1 m-2 h-40 w-11/12  "
                  placeholder="About Job"
                  value={jobLocation}
                  onInput={(e) => setJobLocation(e.target.value)}
                /> */}
              <textarea
                className="rounded p-1 m-2   "
                rows="4"
                cols="40"
                placeholder="About Job"
                //value={about}
                //onInput={(e) => setAbout(e.target.value)}
              ></textarea>{" "}
              <br />
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-gray-400 hover:bg-gray-600 p-1 rounded m-1 ml-36 mt-4"
              >
                {" "}
                Add Candidate
              </button>
            </form>
          </div>
        </Modal>
      </>
    );
  };

  return (
    <div>
      <div className="bg-gray-300 ml-2 mr-6 rounded w-12/12 ">
        <div className="flex flex-row justify-between">
          <p className="ml-3 p-2 mt-2 text-gray-700 text-sm">
            21 Total Candidates
          </p>
          <div className="ml-12 flex flex-row cursor-pointer">
            <MdAlignVerticalTop
              className="mr-3 mt-2 bg-red-500 rounded p-1"
              color="white"
              size={30}
            />
            <RiBarChartHorizontalFill
              className="mr-3 mt-2 "
              color="gray"
              size={25}
            />
            <div className="h-8 mt-2 ">
              <input
                type="text"
                className="bg-gray-300 border-2 rounded border-gray-600"
                placeholder="What are you looking for?"
              />
            </div>

            <button className="ml-5 mt-2 h-7 text-sm text-white rounded hover:scale-105 bg-blue-900  w-44">
              Mark all as read{" "}
            </button>
            <button
              onClick={handleClick}
              className="ml-5 mt-2 h-7 mr-2 text-sm text-white rounded hover:scale-105 bg-red-500  w-44"
            >
              Add candidates
            </button>
          </div>
        </div>

        <div className="border-b-2 border-gray-400 mt-1 ml-4 mr-4">
          {" "}
          <hr />{" "}
        </div>

        <div className="flex flex-row  ">
          {/* <CardBox /> 
          cardbox code start form here 
          */}
          
          <div
      //id={props.id}
      //onDrop={drop}
      //onDragOver={dragOver}
      className=" ml-6 mt-6 rounded-lg flex flex-col  mb-6 w-1/5 bg-gray-200 hover:scale-105 hover:bg-gray-100"
    >
     

      <div className="flex flex-row mt-3">
        <p className="text-gray-700 font-medium text-sm ml-4">Screening</p>
        <p className="text-gray-700 text-sm ml-20">06</p>
      </div>
      <div className="border-b-2 border-gray-400 mt-2 mb-2 ml-4 mr-4">
        <hr />
      </div>

      {users.map((data, index) => {
        return (
          <>
            <Card name={data.Name} />
          </>
        );
      })}

      

      {/*
      carbox code ends at here 
      --------------------------------------------------------------------------------------------------- 
      <Card />
      <Card /> 
      <Card />
      <Card />

      <Card /> */}
    </div>

  
          <CardBoxB />
          <CardBoxC />
          <CardBoxD />
          {/* <CardBox />
         <CardBox />     */}
        </div>
        {show ? AddCandidatesModal() : ""}
      </div>
    </div>
  );
}

export default PipeLine;
