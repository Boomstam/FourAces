import React from 'react';
import styled from 'styled-components';

export default class EventInfo extends React.Component
{
    constructor(props)
    {
        super(props);        
    }

    handleClick()
      { 
        console.log("Clicked");

        this.props.customClick();
      }

    render()
    {
        var title = this.props.info[0];

        var dateTitle = this.props.titles[2];
        var date = this.props.info[1];

        var linkTitle = this.props.titles[3];
        var link = this.props.info[2];
        var linkText = this.props.info[3];

        var locationTitle = this.props.titles[4];
        var location = this.props.info[4];

        return(
            <div onClick={(e) => {this.handleClick()}}>

            <Title>{title}</Title>

            <SpaceBetween/>

            <SubTitle>{dateTitle}</SubTitle>
            <Date>{date}</Date>

            <SpaceBetween/>

            <SubTitle>{linkTitle}</SubTitle>
            
            <Tickets href={link}>{linkText}</Tickets>

            <SpaceBetween/>

            <SubTitle>{locationTitle}</SubTitle>
            <Location>{location}</Location>

            <ClickScreen 
            onClick={(e) => {this.handleClick()}}/>

            </div>
        )
    }
}

//position: fixed;
const ClickScreen = styled.div`
    position: fixed;
    z-index: 3;
    width: 100vw;
    height: 100vh;
`

const Title = styled.div`
    font-size: 2vw;
    font-weight: 700;
    margin: 15vh 0vw 5vh 40vw
`

const SubTitle = styled.div`
    font-size: 1.8vw;
    font-weight: 500;
    text-align: center;
`

const SpaceBetween = styled.div`
    margin: 7vh 0vw 0vh 0vw;
`

const Date = styled.div`
    font-size: 1.5vw;
    left: 20vw;

    text-align: center;
`

const Tickets = styled.a`
    text-align: center;
    display: block;
    width: 10vw;
    margin: 0vh 0vw 0vh 45vw;
    z-index: 4;
`

const Location = styled.div`
    text-align: center;
`