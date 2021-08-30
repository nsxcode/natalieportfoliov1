import styled from "styled-components";
import {Link as LinkR} from "react-router-dom";
import {Link as LinkS} from "react-scroll";
import { defaultThemeColours } from "../../utils/Colours";

export const NavContainer = styled.div`
  //background color css came from a gradient generator
  background: hsla(0, 100%, 94%, 1);
  background: linear-gradient(225deg, hsla(0, 100%, 94%, 1) 0%, hsla(36, 65%, 95%, 1) 100%);
  //Basic container attributes
  height: 80px;
  display: flex;
  font-size: 1rem;
  //Will stick to the top when the user scrolls
  position: sticky;
  //Pink border at the bottom of the navbar container
  border-style: solid;
  border-top: none;
  border-left: none;
  border-right: none;
  border-width: 1px;
  border-color: ${defaultThemeColours.flushedPink};
  //padding
  padding: 5px 10px 5px 10px;
`

// Logo container + Sizing
export const NavbarLogo = styled(LinkR)`
  justify-self: flex-start; 
  cursor: pointer;
  display: flex;
  align-items: center;
`

export const LogoImg = styled.img`
  width: 90px;
  height: 72px;`

//Hamburger Icon | When to hide links when screen size changes
export const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #000;
    padding-top: 5px;
  }
`
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  justify-content: flex-end;
  
  @media screen and (max-width: 768px){
    display: none;
  }
`
export const NavItem = styled.li`
  height: 80px;
  display: flex;
  justify-content: flex-end;
`
export const NavLink = styled(LinkS)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  font-family: 'Italiana', serif;
  font-size: 1.2rem;
  &:hover{
    outline: 2px solid ${defaultThemeColours.flushedPink};
    outline-offset: 1px;
    margin: 15px
  }

  &:active{
    border-bottom: 3px solid ${defaultThemeColours.flushedPink};
  }
`
export const NavLeft = styled.div`
  display: flex;
`

export const NavMiddle = styled.div`
  display: flex;
  height: 100%;
  flex: 2;
  justify-content: center;
`

export const NavRight = styled.div`
  display: flex;
`
