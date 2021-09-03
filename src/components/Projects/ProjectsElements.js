import styled from "styled-components";
import { defaultThemeColours } from "../../utils/Colours";

export const Container = styled.div `
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.background};
  display: flex;
  flex-direction: column;
`

export const Heading = styled.div`
  font-family: 'Italiana', serif;
  font-size: 50px;
  line-height: 85px;
  padding-top: 1%;
  padding-bottom: 2%;
  display: flex;
  justify-content: center;
 color: ${props => props.theme.text};
 @media screen and (max-width: 768px) {
  font-size: 35px;
 }
`

export const CardContainer = styled.div`
  background-color: ${props => props.theme.cardBackgroundColor};
  width: 617px;
  height: 100%;
  border-radius: 0 0 12px 12px;
  margin-bottom: 40px;

 @media screen and (max-width: 768px) {
  width: 304px;

 }
 
 @media screen and (max-width: 303px) {
    width: 230px;
 }
`

export const ProjectImage = styled.img `
  width: 617px;
  height: 352px;
  border-radius: 12px 12px 0 0;
 @media screen and (max-width: 768px) {
  width: 304px;
  height: 173px;
 }
 
 @media screen and (max-width: 303px) {
   width: 230px;
   height: 131px;
 }
`
export const Row = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
 @media screen and (max-width: 768px) {
  flex-direction: column;
 }
`

export const Column = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex: 50%;
`
export const ColumnCard = styled.div`
  display: flex;
  margin: 1rem;
  padding: 0;
`

export const PrimaryFontHeader = styled.h2`
  font-family: 'Italiana', serif;
 
 `
export const Info = styled.div`
  padding: 1.1rem;
  padding-top: 0;
  margin: 0;

`

export const ProjectLink = styled.a `
 font-family: 'Cormorant', serif;
 text-decoration: none;
`
export const Text = styled.p`
  font-family: 'Cormorant', serif;
  flex-flow: wrap;
`



