import React, {useState} from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Hero from "./components/Hero/Hero";
import Skills from "./Skills/Skills";

const Home = () => {
    const [isOpen , setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return(
        <>
            <Sidebar isOpen={isOpen} toggle = {toggle}/>
            <Navbar  toggle={toggle}/>
            <Hero/>
            <Skills/>
        </>

    );
};

export default Home;
