import logo from "./logo.svg";
import "./App.css";
import { Slidebar } from "./components/Slidebar";
import Dashboardview from "./components/Dashboardview";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex">
      <div className="basis-[12%] h-[100vh] border">
        <Slidebar />
      </div>
      <div className="basis-[88%] border h-[100vh] overflow-scroll ">
        <Dashboardview />
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default App;
