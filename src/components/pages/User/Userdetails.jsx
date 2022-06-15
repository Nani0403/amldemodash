import React from "react";
import Cards from "../User/Cards"
import "../User/userdetails.css";

const Userdetails = ({ Userdata }) => {
  return (
    <div className="userCards">
      {Userdata.map((user, i) => {
        return (
          <Cards
            key={i}
            id={Userdata[i].id}
            name={Userdata[i].name}
            email={Userdata[i].email}
          />
        );
      })}
    </div>
  );
};

export default Userdetails;
