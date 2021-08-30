import styled from "styled-components";
import { defaultThemeColours } from "../../utils/Colours";
import {Link as LinkS} from "react-scroll";

export const SidebarContainer = styled.aside`
  position: fixed;
  width: 100%;
  height: 100%;
  background: ${defaultThemeColours.yellowBeige};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: 0.2s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const SidebarWrapper = styled.div`
  color: #000;
`

export const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media screen and (max-width: 480px){
    grid-template-rows: repeat(6, 60px);
  }
`

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #000;
  cursor: pointer;
  font-family: 'Italiana', serif;
  padding-right: 30px;
  margin: 20px;
  text-align: center;
  
  &.hover{
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`

