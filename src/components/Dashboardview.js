import React from "react";
import { FaSearch } from "react-icons/fa";

const Dashboardview = () => {
  return (
    <div>
      <div className="flex items-center rounded-[5px] ">
        <input
          type="text"
          className="bg-[#F8F9FC] h-[40px] outline-none pl-[13px] w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal "
          placeholder="Search for ..."
        />
        <div className="bg-[#4E73DF] h-[40px] px-[14px] flex items-center justify-center rounded-tr-[5px] rounded-br-[5px] ">
          <FaSearch color="white" />
        </div>
      </div>
    </div>
  );
};

export default Dashboardview;
