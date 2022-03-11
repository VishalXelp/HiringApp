import React from "react";
import companyLogo from "../../assets/logo.jpg";

function header() {
  return (
    <header className="flex items-center justify-between ml-4 pt-3">
      <div className="flex items-center ">
        <img
          className="rounded-md"
          src={companyLogo}
          height={"50px"}
          width={"50px"}
          alt="Rooster Inc. logo"
        />
        <span className="text-2xl hover:text-red-400 ml-3">Rooster App </span>
      </div>

    

    </header>
  );
}

export default header;
