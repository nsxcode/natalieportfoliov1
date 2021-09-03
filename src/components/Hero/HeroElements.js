import styled from "styled-components";
import {fontSizes} from "../../utils/FontSizes";

export const HeroContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.background};
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
  font-size: ${fontSizes.mainHeading};
  line-height: 85px;
  padding-top: 7%;
  margin-top: -60px;
  color: ${props => props.theme.text};
  @media screen and (max-width: 768px) {
    font-size: 32px;
    margin-top: -20px;
    text-align: center;
    
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
  color: ${props => props.theme.text};
  padding-bottom: 10px;
  font-size: 1.5rem;
  @media screen and (max-width: 768px) {
    font-size: ${fontSizes.mobileSubHeading};
    flex-wrap: wrap;
    text-align: center;
    padding: 4%;
  }
`



