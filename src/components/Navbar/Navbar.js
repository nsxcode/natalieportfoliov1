import React from "react";
import { NavContainer, NavMenu, NavItem, NavLink, MobileIcon, NavbarLogo,  LogoImg, NavLeft, NavMiddle, NavRight, NavContactLink } from "./NavbarElements";
import logo from'../../assets/logo.png'
import {FaBars} from 'react-icons/fa'

const Navbar = ( {toggle, changeTheme} ) => {
    return(
        <NavContainer>
            <NavLeft>
                <NavbarLogo  activeClass='active' to='hero' spy={true} smooth={true} offset={-70} duration={500}>
                    <LogoImg src={logo} alt=""/>
                </NavbarLogo>
            </NavLeft>

            <NavMiddle>
            </NavMiddle>

            <NavRight>
                <NavMenu>
                    <NavItem>
                        <NavLink activeClass='active' to='skills' spy={true} smooth={true} offset={-70} duration={500}>Skills</NavLink>
                        <NavLink activeClass='active' to='projects' spy={true} smooth={true} offset={-70} duration={500}>Projects</NavLink>
                        <NavLink activeClass='active' to='contact' spy={true} smooth={true} offset={-70} duration={500}>Contact</NavLink>
                        <NavLink onClick={changeTheme}>Change Theme</NavLink>
                    </NavItem>
                </NavMenu>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
            </NavRight>
        </NavContainer>
    );
};

export default Navbar;
