import React, { useState } from "react";
import Modal from "react-modal";
import ui from "../../../assets/ui2.png";
//import FlashMessage from 'react-flash-message'
import image from "../../../assets/users/user1.jpg";
import image2 from "../../../assets/users/user8.png";

function Description() {
  const [active, setActive] = useState(true);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  };
  const hide = () => {
    setShow(false);
  };

  const [show2, setShow2] = useState(false);

  const handleClick2 = () => {
    setShow2(true);
  };
  const hide2 = () => {
    setShow2(false);
  };

  const inactive = () => {
    setActive(false);
  };

  const beactive = () => {
    setActive(true);
  };

  var text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua.
Dictum sit amet justo donec enim diam vulputate. Ipsum dolor sit
amet consectetur adipiscing elit. Mus mauris vitae ultricies leo
integer malesuada nunc vel risus. Commodo elit at imperdiet dui
accumsan sit amet nulla. Dignissim sodales ut eu sem integer
vitae justo. Proin libero nunc consequat interdum varius sit.
Pulvinar etiam non quam lacus. Massa enim nec dui nunc.
Facilisis sed odio morbi quis commodo odio aenean. Urna duis
convallis convallis tellus id interdum velit.`;

  const editCandidatesModal = () => {
    const customStyles = {
      content: {
        top: "40%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        padding: "0px",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "20px",
      },
    };

    return (
      <>
        <Modal isOpen={show} style={customStyles}>
          <div className="  bg-red-400 p-8 text-black-50 ">
            <p
              onClick={hide}
              className="absolute left-3/4 ml-10 -mt-5 mb-2 cursor-pointer "
            >
              X
            </p>
            <h1 className="text-orange-50 text-2xl  mb-1 mt-3">
              Are You Sure ?
            </h1>
            <p className="text-orange-50 text-sm">
              {" "}
              you sure want to delete this Job description ...{" "}
            </p>

            <button className="rounded p-1  ml-2 mt-5 mr-36 bg-gray-400">
              Cancel
            </button>
            <button className="rounded p-1 mt-5  bg-gray-400">Confirm</button>
          </div>
        </Modal>
      </>
    );
  };

  const editDiscription = () => {
    const customStyles = {
      content: {
        top: "40%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        padding: "0px",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "20px",
      },
    };

    return (
      <>
        <Modal isOpen={show2} style={customStyles}>
          <div className="  bg-red-400 p-8 text-black-50 ">
            <p
              onClick={hide2}
              className="absolute left-3/4 ml-10 -mt-5 mb-2 cursor-pointer "
            >
              X
            </p>
            <h1 className="text-orange-50 text-2xl  mb-1 mt-3">
              Edit Description
            </h1>
            <p className="text-orange-50 text-sm"> </p>
            <input className="h-32" type="text" placeholder={text} />
            <button className="rounded p-1  ml-2 mt-5 mr-36 bg-gray-400">
              Cancel
            </button>
            <button className="rounded p-1 mt-5  bg-gray-400">Confirm</button>
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
          <div className="ml-12 flex flex-row">
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
            <button className="ml-5 mt-2 h-7 mr-2 text-sm text-white rounded hover:scale-105 bg-red-500  w-44">
              Add candidates
            </button>
          </div>
        </div>
        <div className="border-b-2 border-gray-400 mt-1 ml-4 mr-4">
          {" "}
          <hr />{" "}
        </div>
        {
          //content will go there
        }
        <div className="flex ">
          <div className=" flex flex-col w-3/5 m-1 p-3 ml-10 mt-4  h-full rounded-md bg-gray-200">
            <div className=" mt-5  w-full flex flex-row justify-evenly">
              <p className=" -ml-10 text-2xl font-semibold">UI/UX Designer</p>

              <p className="text-gray-500 text-sm mt-2  "> Gale , Sri Lanka </p>

              <p className="text-gray-500 text-sm mt-2  "> Part-Time</p>
              {active ? (
                <button className="mt-1 h-6 text-sm text-slate-100 rounded hover:scale-105  bg-green-500  w-24">
                  Active
                </button>
              ) : (
                <button className="mt-1 h-6 text-sm text-slate-100 rounded hover:scale-105  bg-red-500  w-24">
                  In Active
                </button>
              )}
            </div>

            <p className="text-xl mt-4 text-gray-700 font-medium">
              Description For Job :-{" "}
            </p>
            <div>
              <p className="text-gray-500 text-sm mt-2">{text}</p>
            </div>

            <div className="flex space-x-7 m-4 cursor-pointer">
              <p
                className="text-blue-500 text-sm mt-2 scale-105 hover:text-blue-700"
                onClick={handleClick2}
              >
                {" "}
                Edit Description{" "}
              </p>
              <p
                className="text-red-500 text-sm mt-2 scale-105 hover:text-red-700"
                onClick={handleClick}
              >
                {" "}
                Delete Description{" "}
              </p>
              <button
                className="mt-1 p-1 text-sm text-slate-100 rounded hover:scale-105  bg-red-500  "
                onClick={inactive}
              >
                Set as Inactive
              </button>{" "}
              <button
                className="mt-1 p-1 text-sm text-slate-100 rounded hover:scale-105  bg-green-500  "
                onClick={beactive}
              >
                Set Active
              </button>
            </div>
          </div>

          <div className="m-3 mt-5 bg-gray-200 ml-9 ">
            <img
              className=" rounded w-64 h-64 border-2  "
              src={ui}
              alt="bell"
            />
            <button className="mt-2 p-3 ml-12 w-40 text-sm text-slate-100 rounded hover:scale-105  bg-purple-500  ">
              Gallary
            </button>
          </div>
        </div>

        {
          // content will got ehr ere
        }

        <div className=" flex flex-col w-5/5 mr-20 m-1 p-3 ml-10 mt-4  h-full rounded-md bg-gray-200">
          <div className=" mt-5  w-full flex flex-row justify-between">
            <p className="  text-2xl font-semibold">Hiring Team </p>

            <p className="text-red-500 text-sm mt-2 mr-7 cursor-pointer ">
              {" "}
              Edit Add Remove
            </p>
          </div>
          <p className="text-xl mt-4 mb-2 text-gray-700 font-medium">
            Hiring Manager
          </p>
          {
            //cardfill go down there
          }
          <div>
            <div className="flex bg-gray-300 p-1 rounded w-2/6 ">
              <div className=" flex-col mt-5 ml-4">
                <p>Audrey Hepburn </p>
                <p className="text-gray-500 text-sm mt-2">
                  HRD , XYZ Incorporation
                </p>
                <p className="text-gray-700 text-sm mt-2">
                  Belford , Northemburland
                </p>
              </div>
              <div className=" ml-7 flex-col">
                <img
                  className=" w-32 h-32 border-1 rounded-full  "
                  src={image}
                  alt="bell"
                />
              </div>
            </div>

            <div>
              {
                // code for interviewers
              }
              <p className="text-xl mt-4 mb-2 text-gray-700 font-medium">
                Interviewers
              </p>
              {
                // code for card of interviewers
              }
              <div className="flex">
                <div className="flex bg-gray-300 p-1 rounded w-2/6 ">
                  <div className=" flex-col mt-5 ml-4">
                    <p>Keshav Kumar </p>
                    <p className="text-gray-500 text-sm mt-2">
                      Associate , ABC LLC
                    </p>
                    <p className="text-gray-700 text-sm mt-2">Seattle , US</p>
                  </div>
                  <div className=" ml-7 flex-col">
                    <img
                      className=" w-32 h-32 border-1 rounded-full  "
                      src={image2}
                      alt="bell"
                    />
                  </div>
                </div>
                {
                  //code for another card
                }
                <div className="flex bg-gray-300 p-1 rounded w-2/6  ml-10">
                  <div className=" flex-col mt-5 ml-4">
                    <p>Sourabh Gupta </p>
                    <p className="text-gray-500 text-sm mt-2">
                      Partner , Mitra Capitals LLC
                    </p>
                    <p className="text-gray-700 text-sm mt-2">Delhi , IN</p>
                  </div>
                  <div className=" ml-7 flex-col">
                    <img
                      className=" w-32 h-32 border-1 rounded-full  "
                      src={image2}
                      alt="bell"
                    />
                  </div>
                </div>

                <div className="flex bg-gray-300 p-1 rounded w-2/6  ml-10">
                  <div className=" flex-col mt-5 ml-4">
                    <p>Anandit Sharma </p>
                    <p className="text-gray-500 text-sm mt-2">
                      Sr Partner , Pearson Hardman Corp
                    </p>
                    <p className="text-gray-700 text-sm mt-2">NYC , IN</p>
                  </div>
                  <div className=" ml-7 flex-col">
                    <img
                      className=" w-32 h-32 border-1 rounded-full  "
                      src={image2}
                      alt="bell"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {
            //card end here
          }
        </div>
        <p className="m-10 ml-64 text-sm text-gray-700 pb-9 ">
          {" "}
          Add Candidates +{" "}
        </p>
        {show ? editCandidatesModal() : ""}
        {show2 ? editDiscription() : ""}
      </div>
    </div>
  );
}

const Cardxyz = () => {
  return <></>;
};

export default Description;
