import React from 'react'
import styled from 'styled-components';
import storage from '../storage/storage'

const infoType = "Info";
const index = 1;

const mailAdress = "info@fouracesgq.com"
const mailListHyperLink = "https://us3.list-manage.com/subscribe?u=1f3dc7d1ffbcf14d26a22133d&id=4967e12432";

export default class ContactInfo extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render(){
        var info = storage.textStorage.getText(infoType, index);

        return(
            <div>
                <TopMargin/>
                <Title>{info.frontmatter.infoTitle}</Title>
                <Mail href="mailto:info@fouracesgq.com">{mailAdress}</Mail>

                <Title>{info.frontmatter.mailTitle}</Title>
                <MailingListContainer>
                <Info>{info.frontmatter.mailList}</Info>
                
                <MailingList href={mailListHyperLink}>{info.frontmatter.mailListLink}</MailingList>
                </MailingListContainer>

                <Info></Info>
            </div>
        )
    }
}

const TopMargin = styled.div`
    margin: 30vh 0vw 0vh 0vw;
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
    font-weight: 600;
`

const Mail = styled.a`
    display: block;
    z-index: 5;
    text-align: center;

    @media (min-width: 650px) {
        font-size: 1.5vw;
      }
    font-size: 3vw;
    font-weight: 600;
`

const MailingListContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 650px) {
        font-size: 1.5vw;
      }
    font-size: 3vw;
    font-weight: 600;
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
    font-weight: 600;
`