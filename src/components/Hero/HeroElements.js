import styled from "styled-components";
import { defaultThemeColours } from "../../utils/Colours";

export const HeroContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${defaultThemeColours.yellowBeige};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 2rem;
  overflow: hidden;
`

export const HeroHeading = styled.div`
  font-family: 'Italiana', serif;
  font-style: normal;
  font-weight: normal;
  font-size: 50px;
  line-height: 85px;
  padding-top: 7%;
  margin-top: -60px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
   margin-top: -20px;
  }
`

export const HeroImage = styled.img`
  width: 468px;
  height: 374px;
  display: flex;
  padding: 2%;
  @media screen and (max-width: 768px) {
    width: 289px;
    height: 233px;
  }
`
export const HeroText = styled.div`
  font-family: 'Cormorant', serif;
  line-height: 33px;
  color: #000000;
  padding-bottom: 10px;
  font-size: 1.5rem;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    flex-wrap: wrap;
    text-align: center;
    margin: 1%;
  }
`



