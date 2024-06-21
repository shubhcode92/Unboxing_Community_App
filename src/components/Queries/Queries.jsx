import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import leftArrow from "./SVG/leftArrow.svg";
import rightArrow from "./SVG/rightArrow.svg";

const Queries = () => {
  return (
    <>
      <div className="w-[980px] h-[40px]">
        <div className="flex justify-between items-center">
          <div className="ml-3 mt-2">
            <img src={leftArrow} alt="leftArrow" />
          </div>
          <ul className="flex space-x-10">
            <li>
              <NavLink
                to={"/queries/repair"}
                className={({ isActive }) => `${isActive ? "text-[#F37413]" : "text-white"} text-[18px]` }
              >
                Repair Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/queries/replacement"}
                className={({ isActive }) => `${isActive ? "text-[#F37413]" : "text-white"} text-[18px]`}
              >
                Replacement Policy
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/queries/safety"}
                className={({ isActive }) => `${isActive ? "text-[#F37413]" : "text-white"} text-[18px]`}
              >
                Safety & Energy Efficiency
              </NavLink>
            </li>
          </ul>
          <div className="mt-2">
            <img src={rightArrow} alt="rightArrow" />
          </div>
        </div>
        {/*  Here is Dynamic page routing  */}
        <Outlet />
      </div>
    </>
  );
};

export default Queries;
