import logo from "./logo.svg";
import "./App.css";
import { Slidebar } from "./components/Slidebar";
import Dashboardview from "./components/Dashboardview";

function App() {
  return (
    <div className="flex">
      <div className="basis-[12%] h-[100vh] border">
        <Slidebar />
      </div>
      <div className="basis-[88%] border">
        <Dashboardview />
      </div>
    </div>
  );
}

export default App;
