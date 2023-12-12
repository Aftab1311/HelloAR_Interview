import React from "react";
import { BsGrid } from "react-icons/bs";
import { IoExitOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  const options = [
    { icon: <BsGrid className="icongrid" size="25px" />, text: "Songs" },
  ];
  return (
    <div className="sidebarContainer">
      <h1 className="logoText">Logo</h1>
      <div className="sidebarPortion">
        {options.map((option, index) => (
          <div className="sideText" key={index}>
            {option.icon}
            {"    "}
            {option.text}
          </div>
        ))}
        <div
          className="logout"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/");
          }}
        >
          <IoExitOutline size="25px" />
          {"   "}
          Logout
        </div>
      </div>
    </div>
  );
};

export default Sidebar;