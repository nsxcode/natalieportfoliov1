import styled from "styled-components";
import {fontSizes} from "../../utils/FontSizes";

export const SkillsContainer = styled.div`
  width: 100%;
  height: 100%;
  border-style: solid;
  border-left: none;
  border-right: none;
  border-color: ${props => props.theme.borderColor};
  border-width: 1px;
  background-color: ${props => props.theme.background};
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
  font-size: ${fontSizes.mainHeading};
  line-height: 85px;
  padding-top: 1%;
  display: flex;
  justify-content: center;
  color: ${props => props.theme.text};

  @media screen and (max-width: 768px) {
    font-size: 35px;
  }
`

export const SecondaryText = styled.div`
  font-family: 'Cormorant', serif;
  font-size: ${fontSizes.subHeading};
  color: ${props => props.theme.text};

  @media screen and (max-width: 768px) {
    font-size: ${fontSizes.mobileSubHeading};
    text-align: center;
    padding: 1%;
  }
`

export const PrimaryFontHeader = styled.h2`
  font-family: 'Italiana', serif;
  color: ${props => props.theme.text};
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
  color: ${props => props.theme.text};
  
  @media screen and (max-width: 768px) {
    padding-right: 25px;
  }
 
`
