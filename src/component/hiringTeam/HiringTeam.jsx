import React from 'react';
import user1 from "../../assets/users/user1.jpeg";
import userz from "../../assets/users/userz.jpg";
import userg from "../../assets/users/userg.jpeg";
import user4 from "../../assets/users/user4.jpg";
import user7 from "../../assets/users/user7.jpeg";



function HiringTeam() {
  return <div>

<div className="flex flex-col ml-6 h-52">
              <p className="text-gray-600 text-lg mt-8 ml-6"> Hiring Team</p>
              <div className="flex flex-row text-gray-500 text-sm">
                <div flex flex-row>
                  <p className="ml-9 mr-9 mt-2"> Hiring manager</p>
                  <img
                    className="rounded-full h-14 w-14 border-2 border-red-500 ml-9 "
                    src={user7}
                    alt="bell"
                  />
                </div>

                <div flex flex-col>
                  <p className=" mt-2"> Interviewers</p>
                  <div className="flex flex-row ">
                    <img
                      className="hover:scale-110 rounded-full -mr-4 h-14 w-14 border-2 border-green-500 "
                      src={user1}
                      width="45px"
                      alt="bell"
                    />
                    <img
                      className="hover:scale-110 rounded-full -mr-4 h-14 w-14 border-2 border-purple-500 "
                      src={userz}
                      alt="bell"
                    />
                    <img
                      className="hover:scale-110 rounded-full -mr-4 h-14 w-14 border-2 border-pink-500  "
                      src={userg}
                      alt="bell"
                    />
                    <img
                      className="hover:scale-110 rounded-full -mr-4 h-14 w-14 border-2 border-gray-500 "
                      src={user4}
                      alt="bell"
                    />
                  </div>
                </div>
              </div>
            </div>

  </div>;
}

export default HiringTeam;
