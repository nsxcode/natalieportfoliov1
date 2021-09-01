import React from "react";
import WeatherSurfer from '../../assets/weather-surfer-celcius-example.png'
import {Container, Row, Column, Heading, ColumnCard, CardContainer, Text, Info, PrimaryFontHeader, ProjectImage, ProjectLink} from "./ProjectsElements";

const Projects = () => {
    return(
        <Container>
            <Heading>
                Projects
            </Heading>
            <Row>
                <Column>
                    <ProjectImage src={WeatherSurfer}/>
                    <CardContainer>
                        <Info>
                            <PrimaryFontHeader>Weather Surfer</PrimaryFontHeader>
                            <Text> HTML, CSS, Javscript</Text>
                            <Text>Weather Surfer is made using OpenWeather API to retrieve live weather data information from any city
                                in the world. This project was made using HTML, CSS, and JS. It's also responsive.</Text>
                            <Row>
                                <ColumnCard>
                                    <ProjectLink href="">Launch Project</ProjectLink>
                                </ColumnCard>
                                <ColumnCard>
                                    <ProjectLink href="">Github</ProjectLink>
                                </ColumnCard>
                                <ColumnCard>
                                    <ProjectLink href="">UI Design Process</ProjectLink>
                                </ColumnCard>
                            </Row>
                        </Info>
                    </CardContainer>
                </Column>
                <Column>
                    <ProjectImage src={WeatherSurfer}/>
                    <CardContainer>
                        <Info>
                            <PrimaryFontHeader>Weather Surfer</PrimaryFontHeader>
                            <Text> HTML, CSS, Javscript</Text>
                            <Text>Weather Surfer is made using OpenWeather API to retrieve live weather data information from any city
                                in the world. This project was made using HTML, CSS, and JS. It's also responsive.</Text>
                            <Row>
                                <ColumnCard>
                                    <ProjectLink href="">Launch Project</ProjectLink>
                                </ColumnCard>
                                <ColumnCard>
                                    <ProjectLink href="">Github</ProjectLink>
                                </ColumnCard>
                                <ColumnCard>
                                    <ProjectLink href="">UI Design Process</ProjectLink>
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
