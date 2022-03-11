/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import { MyComponent } from "../../const/index";
import { sidebarList } from "../../component/data/data";
import Modal from "react-modal";
import MainHead, { PassValues, passValues } from "../mainhead/MainHead";
// import { useChangeUI } from "../../hooks/useChangeUI";
import PassValue from "./PassValue";

function sidebar() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [show, setShow] = useState(false);
  const [jobProfile, setJobProfile] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [about, setAbout] = useState("");

  const [users, setUsers] = useState([
    {
      id: "1",
      Designation: "Back End Developer",
      JobType: "(Part time)",
      Location: "columbo Srilanka",
    },
    {
      id: "2",
      Designation: "QA Engineer",
      JobType: "(Internship)",
      Location: "columbo Srilanka",
    },
    {
      id: "3",
      Designation: "UI Designer",
      JobType: "(Full time)",
      Location: "columbo Srilanka",
    },
  ]);

  // var JobData  = [
  //   {
  //     id: "1",
  //     Designation: "UI/UX Developer",
  //     JobType: "(Full time)",
  //     Location: "columbo Srilanka",
  //   },
  //   {
  //     id: "2",
  //     Designation: "QA Engineer",
  //     JobType: "(Internship)",
  //     Location: "columbo Srilanka",
  //   },
  //   {
  //     id: "3",
  //     Designation: "UI Designer",
  //     JobType: "(Full time)",
  //     Location: "columbo Srilanka",
  //   }
  //  ];

  // localStorage.setItem("films", JSON.stringify(users));

  const handleClick = () => {
    setShow(true);
  };
  const hide = () => {
    setShow(false);
  };
  //var movies = localStorage.getItem("films");
  //movies     = JSON.parse(movies);

  useEffect(() => {
    const jobeys = JSON.parse(localStorage.getItem("films"));
    setUsers(jobeys);
  }, []);

  useEffect(() => {
    localStorage.setItem("films", JSON.stringify(users));
  }, [users]);

  // var movies = localStorage.getItem("films");
  // movies     = JSON.parse(movies);

  //   movies.push(
  //    users
  //    );

  //    localStorage.setItem("films", JSON.stringify(movies));

  const addJob = (job) => {
    const results = [...users, job];
    setUsers(results);
  };

  const handleSubmit = () => {
    const FormData = {
      id: "5",
      Designation: jobProfile,
      JobType: about,
      Location: jobLocation,
    };

    addJob(FormData);
    // localStorage.setItem('films', movies.toString());

    // const updateUsers = [
    //   // copy the current users state
    //   ...users,
    //   // now you can add a new object to add to the array
    //   {
    //     // using the length of the array for a unique id
    //     id: users.length + 1,
    //     // adding a new user name
    //     JobType: about,
    //     // with a type of member
    //     Location: jobLocation,
    //     Designation:jobProfile
    //   }
    // ];
    // // update the state to the updatedUsers
    // setUsers(updateUsers);

    // console.log(users);

    // localStorage.setItem("jobProfile",jobProfile);
    // localStorage.setItem("jobLocation",jobLocation);
    // localStorage.setItem("about",about);
  };

  const MyModal = () => {
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
          <div className=" bg-gradient-to-r from-red-500 to-purple-500 p-8 text-black-50 ">
            <p
              onClick={hide}
              className="absolute left-3/4 ml-12 -mt-5 mb-8 cursor-pointer "
            >
              X
            </p>
            <h1 className="text-orange-50 text-2xl ml-32 mb-3 mt-8">
              {" "}
              Post Your Jobs
            </h1>

            <form>
              <input
                type="text"
                className="rounded p-1 m-2 w-11/12 "
                placeholder="Job profile "
                value={jobProfile}
                onInput={(e) => setJobProfile(e.target.value)}
              />
              <br></br>
              <input
                type="text"
                className="rounded p-1 m-2 w-11/12"
                placeholder="Job Location "
                value={jobLocation}
                onInput={(e) => setJobLocation(e.target.value)}
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
                value={about}
                onInput={(e) => setAbout(e.target.value)}
              ></textarea>{" "}
              <br />
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-gray-400 hover:bg-gray-600 p-1 rounded m-1 ml-36 mt-4"
              >
                {" "}
                Submit Post
              </button>
            </form>
          </div>
        </Modal>
      </>
    );
  };

//   const changeUI = () => {
    
//       return(<>

//     <PassValue Designation={sidebarList.Designation} jobtype={sidebarList.JobType} location={sidebarList.Location} />
// {console.log(data.Designation)}
// </>
//   ); }

const [desgnn , setDesgnn] = useState();
const [jobty , setJobty] = useState("");


  return (
    <div className="relative">
      <div className="bg-gray-200 w-1/5 h-full flex flex-col ml-4 mr-4 ">
        <div className="bg-red-500 w-64 justify-between items-center  mt-5 rounded-md h-full">
          <p className="text-lg flex flex-row pl-4 pt-4 text-orange-50">
            My job Posts(50){" "}
            <div className="ml-2 pt-1">
              {" "}
              <button className="cursor:pointer" onClick={handleClick}>
                {" "}
                <MdAddCircleOutline size={25} />{" "}
              </button>
            </div>
          </p>{" "}
          <p className=" text-sm text-orange-50 pl-4">
            {" "}
            all total jobs listed{" "}
          </p>
          <form>
            <label class="block text-orange-50 text-sm pl-4 mt-6">
              Department{" "}
            </label>
            <div className="pl-4 pt-1 mr-4 text-orange-50">
              <MyComponent />
            </div>

            <label class="block text-orange-50 text-sm pl-4 mt-2">
              Jobs types{" "}
            </label>
            <div className="pl-4 pt-1 mr-4 text-orange-50">
              <MyComponent />
            </div>

            <div className="pl-4 mt-3 flex text-orange-50 text-sm">
              <div className="pr-4">
                <input className="" type="checkbox" id="" name="" value="" />{" "}
                All
              </div>
              <div className="pr-4">
                <input className="" type="checkbox" id="" name="" value="" />{" "}
                Active
              </div>
              <div className="pr-4">
                {" "}
                <input
                  className=""
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                />{" "}
                Inactive
              </div>
            </div>
            <div className="w-50 p-3">
              {" "}
              <hr />{" "}
            </div>
          </form>{" "}
          <div className="">
            {
              //commnet map
            }
            <button
              // onClick={changeUI}
              className="bg-gray-200  p-3 rounded-md m-3 -mr-24 w-64 hover:scale-105"
              type="button"
            >
              <div className="flex ">
                <div className="flex-row">
                  <button
                    type="button"
                    value="Rotated text"
                    className=" rotate-90 rounded w-20 mt-3 -mr-3 -ml-4 bg-green-400  text-orange-50"
                    id="rotate"
                  >
                    Active{" "}
                  </button>{" "}
                </div>
                <div className="flex-row text-gray-700">
                  <div className="text-xl"> UI/UX Designer</div>
                  <div className="text-sm"> (full Time)</div>
                  <div className="text-base"> Gale Srilanka</div>{" "}
                </div>
              </div>
            </button>

            {users.map((data, index) => {

        
             
              
              return (
                <>
                  <button
                      onClick={ 
                        //handleClicked
                         () => {
                         
                         
                         // setDesgnn(data.Designation)
                          //<PassValue Designation={desgnn}  />
                          passValues(data.Designation);
                        
                           //console.log(desgnn);
                          
                       }
                      }
                    className="bg-red-400 text-orange-50  p-3 rounded-md m-3 w-56 hover:scale-105"
                    type="button"
                  >
                   
                    <div className="text-xl"> {data.Designation}</div>
                    <div className="text-sm"> {data.JobType}</div>
                    <div className="text-base"> {data.Location} </div>
                  </button>
                  
                </>
              );
            })}
          </div>{" "}
        

        </div>
        {show ? MyModal() : ""}
      </div>
    </div>
  );
}

const Mapping = (props) => {
  return (
    <>
      {props.users.map((data, index) => {
        return (
          <>
            <button
              className="bg-red-400 text-orange-50  p-3 rounded-md m-3 w-56 hover:scale-105"
              type="button"
            >
              <div className="text-xl"> {data.Designation}</div>
              <div className="text-sm"> {data.JobType}</div>
              <div className="text-base"> {data.Location} </div>
            </button>
          </>
        );
      })}
    </>
  );
};

export default sidebar;
