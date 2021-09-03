import React, {useState} from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import ToTop from "./components/ScrollToTop/ScrollToTop";
import Contact from "./components/Contact/Contact";
import { ThemeProvider } from "styled-components";
import {defaultTheme, luxuryTheme} from "./utils/Themes";
import logo from './assets/logo.png'
import bluelogo from './assets/bluelogo.png'
import Footer from "./components/Footer/Footer";

const Home = () => {
    const [isOpen , setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const [useLuxTheme, setUseLuxTheme] = useState(false);
    const changeTheme = () => {
        setUseLuxTheme(!useLuxTheme)

    }



    return(
        <ThemeProvider theme={useLuxTheme ? luxuryTheme : defaultTheme}>
            <Sidebar isOpen={isOpen} toggle = {toggle}/>
            <Navbar  toggle={toggle} changeTheme={changeTheme}/>
            <Hero/>
            <Skills/>
            <Projects/>
            <Contact/>
            <ToTop/>
            <Footer/>
        </ThemeProvider>

    );
};

export default Home;
