import React, { useContext } from "react";
import NavBar from "./component/NavBar";
import Hero from "./component/Hero";
import { MyContext } from "./context/Context";
import { Route, Routes } from "react-router-dom";
import Menu from "./page/Menu";

const App = () => {
  const { theme } = useContext(MyContext);

  return (
    <div
      className={`min-h-screen ${theme === "dark" ? "bg-neutral-900" : "bg-white"}`}
    >
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </div>
  );
};

export default App;
