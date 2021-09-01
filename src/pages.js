import React, {useState} from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Hero from "./components/Hero/Hero";

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
        </>

    );
};

export default Home;
