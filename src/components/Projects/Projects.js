import React from "react";
import WeatherSurfer from '../../assets/weather-surfer-celcius-example.png'
import PersonalPortfolio from '../../assets/personalPortflio.png'
import {Container, Row, Column, Heading, ColumnCard, CardContainer, Text, Info, PrimaryFontHeader, ProjectImage, ProjectLink} from "./ProjectsElements";

const Projects = () => {
    return(
        <Container id='projects'>
            <Heading>
                Projects
            </Heading>
            <Row>
                <Column>
                    <ProjectImage src={WeatherSurfer}/>
                    <CardContainer>
                        <Info>
                            <PrimaryFontHeader>Weather Surfer</PrimaryFontHeader>
                            <Text> HTML, CSS, Javascript</Text>
                            <Text>Weather Surfer is made using OpenWeather API to retrieve live weather data information from any city
                                in the world. This project was made using HTML, CSS, and JS. It's also responsive.</Text>
                            <Row>
                                <ColumnCard>
                                    <ProjectLink href="https://github.com/nsxcode/weather-surfer">Github</ProjectLink>
                                </ColumnCard>
                                <ColumnCard>
                                    <ProjectLink href="">UX Design Process</ProjectLink>
                                </ColumnCard>
                            </Row>
                        </Info>
                    </CardContainer>
                </Column>
                <Column>
                    <ProjectImage src={PersonalPortfolio}/>
                    <CardContainer>
                        <Info>
                            <PrimaryFontHeader>Personal Portfolio</PrimaryFontHeader>
                            <Text> React </Text>
                            <Text>Personal Portfolio is the website you are on right now! It was made using React, styled-components, react-scroll, and some other libraries.
                                The special feature is being able to change the theme by clicking or pressing on "Change Theme". </Text>
                            <Row>
                                <ColumnCard>
                                    <ProjectLink href="https://github.com/nsxcode/natalieportfoliov1">Github</ProjectLink>
                                </ColumnCard>
                                <ColumnCard>
                                    <ProjectLink href="https://www.figma.com/file/NUOjtOHAo3Lnkdfndsiooo/Natalie-s-Personal-Portfolio?node-id=3%3A44">UX Design Process</ProjectLink>
                                </ColumnCard>
                            </Row>
                        </Info>
                    </CardContainer>
                </Column>
            </Row>
        </Container>
    );
};

export default Projects;
