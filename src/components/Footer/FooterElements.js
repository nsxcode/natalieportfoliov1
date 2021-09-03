import styled from "styled-components";
import {fontSizes} from "../../utils/FontSizes";

export const FooterContainer = styled.div`
  left: 0;
  bottom: 0;
  width: 100%;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.footerBackground};
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const FooterContent = styled.div`
  font-family: 'Italiana', serif;
  display: flex;
  flex-direction: row;
  font-size: ${fontSizes.subHeading};
  @media screen and (max-width: 768px) {
    font-size: ${fontSizes.mobileSubHeading};
    flex-direction: column;
    justify-content: center;
  }
 
  
`
