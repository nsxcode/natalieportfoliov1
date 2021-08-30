import React from "react";
import { NavContainer, NavMenu, NavItem, NavLink, MobileIcon, NavbarLogo,  LogoImg, NavLeft, NavMiddle, NavRight } from "./NavbarElements";
import logo from'../../assets/logo.png'
import {FaBars} from 'react-icons/fa'

const Navbar = ( {toggle} ) => {
    return(
        <NavContainer>
            <NavLeft>
                <NavbarLogo to='/'>
                    <LogoImg src={logo} alt=""/>
                </NavbarLogo>
            </NavLeft>

            <NavMiddle>
            </NavMiddle>

            <NavRight>
                <NavMenu>
                    <NavItem>
                        <NavLink to='skills'>Skills</NavLink>
                        <NavLink to='projects'>Projects</NavLink>
                        <NavLink to='contact'>Contact</NavLink>
                        <NavLink>Change Theme</NavLink>
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
