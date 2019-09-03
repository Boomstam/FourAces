import React from 'react'
import styled from 'styled-components';
import storage from '../storage/storage';
import state from '../state/state';

const infoType = "Info";
const index = 1;

const mailAdress = "info@fouracesgq.com"
const mailListHyperLink = "https://us3.list-manage.com/subscribe?u=1f3dc7d1ffbcf14d26a22133d&id=4967e12432";

const loge35Mail = "info@loge35.be";
const mailtoKey = "mailto:"
const loge35Phone = "+32 475 45 59 59";
const telKey = "tel:"
const mcDanielMail = "danmcdaniel@live.com";
const mcDanielSite = "https://www.danmcdanielmanagement.com/four-aces";
const mcDanielSiteTitle = "www.danmcdanielmanagement.com";

const dotSeparator = '•';

export default class ContactInfo extends React.Component
{
    constructor(props)
    {
        super(props);

        console.log(this.props.pressKits)
    }

    render(){
        let info = storage.textStorage.getText(infoType, index);
        //console.log(JSON.stringify(info));

        let pressKitIndex = 0;

        if(state.languageState.getLanguage() === false){
            
            pressKitIndex = 1;
        }
        let pressKitURL = this.props.pressKits.allFile.edges[pressKitIndex].node.publicURL;

        console.log("URL_" + pressKitURL)

        return(
            <div>
                <TopMargin/>

                <Title>{info.frontmatter.infoTitle}</Title>
                <Mail href="mailto:info@fouracesgq.com" 
                     target="_blank">
                     {mailAdress}
                     </Mail>

                <Title>{info.frontmatter.mailTitle}</Title>
                <MailingListContainer>
                <Info>{info.frontmatter.mailList}</Info>
                    <MailingList 
                        href={mailListHyperLink}
                        target="_blank">
                        {info.frontmatter.mailListLink}
                    </MailingList>
                </MailingListContainer>

                <Title>{info.frontmatter.bookingsTitle}</Title>
                <BookingsContainer>
                    <BookingLine>
                        <BookingText>{info.frontmatter.bookingBelgium}</BookingText>
                        <Dot>{dotSeparator}</Dot>
                        <BookingLink 
                            href={mailtoKey + loge35Mail}
                            target="_blank">
                            {loge35Mail}
                         </BookingLink>
                         <Dot>{dotSeparator}</Dot>
                        <BookingLink
                            href={telKey + loge35Phone}
                            target="_blank">
                                {loge35Phone}
                            </BookingLink>
                </BookingLine>
                <BookingLine>
                <BookingText>{info.frontmatter.bookingUSA}</BookingText>
                        <Dot>{dotSeparator}</Dot>
                        <BookingLink 
                            href={mailtoKey + mcDanielMail}
                            target="_blank">
                            {mcDanielMail}
                         </BookingLink>
                         <Dot>{dotSeparator}</Dot>
                         <BookingLink
                            href={mcDanielSite}
                            target="_blank">
                                {mcDanielSiteTitle}
                            </BookingLink>
                            </BookingLine>
                </BookingsContainer>

                <Title>{info.frontmatter.pressKitTitle}</Title>
                <PressKit
                    href={pressKitURL}>
                    {info.frontmatter.pressKitLink}
                </PressKit>

            </div>
        )
    }
}

const TopMargin = styled.div`
    margin: 15vh 0vw 0vh 0vw;
`

const Title = styled.div`
    margin: 10vh 0vw 0vh 0vw;
    
    text-align: center;

    @media (min-width: 650px) {
        font-size: 2vw;
      }
    font-size: 4vw;
    font-weight: 700;
`

const Info = styled.div`
    text-align: center;
    @media (min-width: 650px) {
        font-size: 1.5vw;
      }
    font-size: 3vw;
`

const Mail = styled.a`
    display: block;
    z-index: 5;
    text-align: center;

    @media (min-width: 650px) {
        font-size: 1.5vw;
      }
    font-size: 3vw;
`

const MailingListContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 650px) {
        font-size: 1.5vw;
      }
    font-size: 3vw;
`

const MailingList = styled.a`
    display: inline;
    z-index: 5;
    text-align: center;
    margin: 0vh 0vw 0vh 0.5vw;

    @media (min-width: 650px) {
        font-size: 1.5vw;
      }
    font-size: 3vw;
`

const BookingsContainer = styled.div`

    @media (min-width: 650px) {
        font-size: 1.5vw;
    }
    font-size: 3vw;
`

const BookingLine = styled.div`

      text-align: center;
`

const BookingText = styled.div`

    display: inline;
`

const BookingLink = styled.a`
    display: inline;

`

const Dot = styled.div`
    display: inline;
    margin: 0vh 1vw 0vh 1vw;

`

const PressKit = styled.a`

    display: block;
    text-align: center;
    margin: 0vh 0vw 10vh 0vw;
`