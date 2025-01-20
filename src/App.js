import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomAppBar from "./components/AppBar/CustomAppBar";
import CustomSideBar from "./components/SideBar/CustomSideBar";
import AboutMe from "./components/AboutMe/AboutMe";
import MyWork from "./components/MyWork/MyWork";
import MySchool from "./components/MySchool/MySchool";
import MyHometown from "./components/MyHometown/MyHometown";
import MyHobbies from "./components/MyHobbies/MyHobbies";
import ContactMe from "./components/ContactMe/ContactMe";

function App() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen(!open);

  return (
    <Router>
      <CustomAppBar toggleDrawer={toggleDrawer} />
      <CustomSideBar open={open} toggleDrawer={toggleDrawer} />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/my-work" element={<MyWork />} />
        <Route path="/my-school" element={<MySchool />} />
        <Route path="/my-hometown" element={<MyHometown />} />
        <Route path="/my-hobbies" element={<MyHobbies />} />
        <Route path="/contact-me" element={<ContactMe />} />
      </Routes>
    </Router>
  );
}

export default App;
