import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./styles/main.scss";
import NavBar from "./components/NavBar";
import { useState } from "react";

function App() {
  // state
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div className="main">
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div
        className="pages-container"
        style={{
          width: "100%",
          paddingLeft: showSidebar === true ? "270px" : "100px",
          paddingRight: "70px",
          transition: "padding 0.2s ease",
        }}
      >
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
