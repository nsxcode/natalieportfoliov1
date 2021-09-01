import styled from "styled-components";
import { defaultThemeColours } from "../utils/Colours";

export const SkillsContainer = styled.div`
  width: 100%;
  height: 100%;
  border-style: solid;
  border-left: none;
  border-right: none;
  border-color: ${defaultThemeColours.flushedPink};
  border-width: 1px;
  background-color: ${defaultThemeColours.yellowBeige};
  padding-top: 1%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 2rem;
`

export const Heading = styled.div`
  font-family: 'Italiana', serif;
  font-style: normal;
  font-weight: normal;
  font-size: 50px;
  line-height: 85px;
  padding-top: 1%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`

export const SecondaryText = styled.div`
  font-family: 'Cormorant', serif;
  font-size: 1.3rem;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
    padding: 1%;
  }
`

export const PrimaryFontHeader = styled.h2`
  font-family: 'Italiana', serif;
  @media screen and (max-width: 768px) {
    padding-right: 25px;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
  }
 
`

export const Row = styled.div`
display: flex;
flex-direction: row;
justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`


export const Column = styled.div`
display: flex;
flex: 25%;
  @media screen and (max-width: 768px) {
    flex: 0
  }
`

export const ListContainer = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 90px;
  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
  
`
export const List = styled.li `
  list-style: none;
  margin-bottom: 1rem;
  font-family: 'Cormorant', serif;
  font-size: 1.3rem;
  align-items: center;
  
  @media screen and (max-width: 768px) {
    padding-right: 25px;
  }
 
`
