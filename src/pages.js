import React, {useState} from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import ToTop from "./components/ScrollToTop/ScrollToTop";
import Contact from "./components/Contact/Contact";

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
            <Projects/>
            <Contact/>
            <ToTop/>
        </>

    );
};

export default Home;
