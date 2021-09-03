import React from "react";
import {ContactContainer, ContactHeading, ContactCardContainer, ContactCardInfo, IconImg, Subtext} from "./ContactElements";
import linkedin from '../../assets/linkedin.png'
import email from '../../assets/email.png'

const Contact = () => {
    return(
        <ContactContainer id='contact'>
            <ContactHeading>
                Contact
            </ContactHeading>
            <Subtext>
                Feel free to get in touch with me. I'm currently looking for internships/co-op positions.
            </Subtext>
            <ContactCardContainer>
                <IconImg src={linkedin}/>
                <ContactCardInfo>
                    <a style={{textDecoration: 'none'}} href="https://www.linkedin.com/in/natalie-sahadeo-3328061b6">Linkedin</a>
                </ContactCardInfo>
            </ContactCardContainer>
            <ContactCardContainer>
                <IconImg src={email}/>
                <ContactCardInfo>
                    sahadeonatalie@gmail.com
                </ContactCardInfo>
            </ContactCardContainer>
        </ContactContainer>
    );
};

export default Contact;
