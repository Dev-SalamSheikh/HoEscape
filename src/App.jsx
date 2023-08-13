import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./styles/main.scss";
import NavBar from "./components/NavBar";
import { useState } from "react";
import { motion } from "framer-motion";

function App() {
  // state
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div className="main">
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <motion.div
        className="pages-container"
        initial={{ paddingLeft: "260px" }}
        animate={{ paddingLeft: showSidebar === true ? "260px" : "100px" }}
        transition={{ duration: 0.3 }}
        style={{
          width: "100%",
          paddingRight: "70px",
        }}
      >
        <NavBar />
        <Outlet />
      </motion.div>
    </div>
  );
}

export default App;
