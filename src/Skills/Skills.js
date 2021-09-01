import React from "react";
import {SkillsContainer, ListContainer, List, Row, Heading, Column, SecondaryText, PrimaryFontHeader} from "./SkillsElements";

const Skills = () => {
    return(
        <SkillsContainer>
            <Heading>
                Skills
            </Heading>
            <Row>
                <SecondaryText>
                    Programming languages, frameworks, and/or tools I have some experience with.
                </SecondaryText>
            </Row>
            <Row>
                <Column>
                    <ListContainer>
                        <PrimaryFontHeader>Cross Platform</PrimaryFontHeader>
                        <List>React Native</List>
                        <List>Flutter</List>
                    </ListContainer>
                </Column>
                <Column>
                    <ListContainer>
                        <PrimaryFontHeader>Mobile Development</PrimaryFontHeader>
                        <List>Kotlin</List>
                        <List>Swift</List>
                    </ListContainer>
                </Column>
                <Column>
                    <ListContainer>
                        <PrimaryFontHeader>Web Development</PrimaryFontHeader>
                        <List>HTML</List>
                        <List>CSS</List>
                        <List>Javascript</List>
                        <List>React</List>
                    </ListContainer>
                </Column>
                <Column>
                    <ListContainer>
                        <PrimaryFontHeader>Other</PrimaryFontHeader>
                        <List>Python</List>
                        <List>Figma</List>
                        <List>Github</List>
                        <List>Firebase</List>
                        <List>Bootstrap</List>
                    </ListContainer>
                </Column>
            </Row>
        </SkillsContainer>
    );
};

export default Skills;
