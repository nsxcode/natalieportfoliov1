import React from "react";
import {HeroContainer, HeroHeading, HeroText, HeroImage} from "./HeroElements";
import logo from '../../assets/logo.png'

const Hero = () => {
    return(
        <HeroContainer id='hero'>
            <HeroHeading>
                Hey, my name is Natalie.
            </HeroHeading>
            <HeroImage src={logo}/>
            <HeroText>I’m a currently a third year Bachelor of Computer Science student at Sheridan College.</HeroText>
            <HeroText>I have a love for creating aesthetics, and bring designs to life through code. </HeroText>
            <HeroText>I also have an interest in app development, and software engineering. </HeroText>
        </HeroContainer>
    )
};
export default Hero;
