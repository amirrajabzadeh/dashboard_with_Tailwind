import React from "react";
import { FaRegCalendarMinus } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Main = () => {
  return (
    <div className="pt-[25px] px-[25px] bg-[#F8F9FC] ">
      <div className="flex items-center justify-between">
        <h1 className="text-[#5A5C69] text-[28px] leading-[34px] font-normal cursor-pointer ">
          Dashboard
        </h1>
        <button className="bg-[#2E52D9] h-[32px] rounded-[3px] text-white flex items-center justify-center px-[30px] curpo">
          Generate Report
        </button>
      </div>

      <div className="grid grid-cols-4 gap-[30px] mt-[25px] mb-[15px] ">
        <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between cursor-pointer px-[30px] hover:shadow-lg  transform hover:scale-[103%] transition duration-300 ease-out">
          <div>
            <h2 className="text-[#B589DF]  text-[11px] leading-[17px] font-bold ">
              EARNINGS (MONTHLY)
            </h2>
            <h1 className="text-[#5A5C69]  text-[20px] leading-[24px] font-bold mt-[5px] ">
              $40,000
            </h1>
          </div>
          <FaRegCalendarMinus fontSize={28} />
        </div>

        <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#48e442] flex items-center justify-between cursor-pointer px-[30px] hover:shadow-lg  transform hover:scale-[103%] transition duration-300 ease-out">
          <div>
            <h2 className="text-[#1cc88a]  text-[11px] leading-[17px] font-bold ">
              EARNINGS (ANNUAL)
            </h2>
            <h1 className="text-[#5A5C69]  text-[20px] leading-[24px] font-bold mt-[5px] ">
              $240,000
            </h1>
          </div>
          <FaRegCalendarMinus fontSize={28} />
        </div>

        <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#7840df] flex items-center justify-between cursor-pointer px-[30px] hover:shadow-lg  transform hover:scale-[103%] transition duration-300 ease-out">
          <div>
            <h2 className="text-[#1cc88a]  text-[11px] leading-[17px] font-bold ">
              TASKS
            </h2>
            <h1 className="text-[#5A5C69]  text-[20px] leading-[24px] font-bold mt-[5px] ">
              $240,000
            </h1>
          </div>
          <FaRegCalendarMinus fontSize={28} />
        </div>

        <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#cf7f3e] flex items-center justify-between cursor-pointer px-[30px] hover:shadow-lg  transform hover:scale-[103%] transition duration-300 ease-out">
          <div>
            <h2 className="text-[#1cc88a]  text-[11px] leading-[17px] font-bold ">
              PENDING REQUESTS
            </h2>
            <h1 className="text-[#5A5C69]  text-[20px] leading-[24px] font-bold mt-[5px] ">
              $240,000
            </h1>
          </div>
          <FaRegCalendarMinus fontSize={28} />
        </div>
      </div>
    </div>
  );
};

export default Main;
