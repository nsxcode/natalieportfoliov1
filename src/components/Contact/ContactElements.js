import styled from "styled-components";
import {defaultThemeColours} from "../../utils/Colours";
import {fontSizes} from "../../utils/FontSizes";

export const ContactContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.background};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 2rem;
  overflow: hidden;
  border-style: solid;
  border-left: none;
  border-right: none;
  border-color: ${props => props.theme.borderColor};
  border-width: 1px;
`

export const ContactHeading = styled.div`
  font-family: 'Italiana', serif;
  font-style: normal;
  font-weight: normal;
  font-size: ${fontSizes.mainHeading};
  line-height: 85px;
  padding-top: 7%;
  margin-top: -60px;
  margin-bottom: 30px;
  color: ${props => props.theme.text};
  @media screen and (max-width: 768px) {
    font-size: 35px;
    margin-top: -20px;
  }

`
export const ContactCardContainer = styled.div`
  background-color: ${props => props.theme.cardBackgroundColor};
  width: 617px;
  height: 80px;
  border-radius: 12px;
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  
  @media screen and (max-width: 768px) {
    width: 304px;

  }

  @media screen and (max-width: 303px) {
    width: 230px;
  }
`

export const ContactCardInfo = styled.div`
  font-family: 'Cormorant', serif;
  margin: 40px;
  font-size: 25px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
    margin: 10px;
  }
`

export const IconImg = styled.img`
    width: 30px;
    height: 30px;
  margin-left: 40px;

  @media screen and (max-width: 768px) {
    width: 20px;
    height: 20px;
    margin-left: 20px;
  }
`

export const Subtext = styled.div`
  font-family: 'Cormorant', serif;
  font-size: ${fontSizes.subHeading};
  margin-top: -30px;
  margin-bottom: 15px;
  color: ${props => props.theme.text};

  @media screen and (max-width: 768px) {
    font-size: ${fontSizes.mobileSubHeading};
    text-align: center;
    padding: 2%;
  }
`
