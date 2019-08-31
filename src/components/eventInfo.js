import React from 'react';
import styled from 'styled-components';
import storage from '../storage/storage';
import Img from 'gatsby-image';

const crossName = "Cross.png";
const mapsLink = "https://www.google.com/maps/search/?api=1&query=";

function getMapsLink(info){

    let link = mapsLink + info.location;

    link = encodeURI(link);

    return link;
}

export default class EventInfo extends React.Component
{
    constructor(props)
    {
        super(props);        
    }

    handleClick()
      {
        this.props.customClick();
      }

    render()
    {
        let cross = storage.imageStorage.getImageByName(crossName);
        let title = this.props.info[0];

        let timeTitle = this.props.titles[2];
        let timeStamp = this.props.info.timeStamp;

        let linkTitle = this.props.titles[3];
        let link = this.props.info.link;
        let linkText = this.props.info.linkText;

        let locationTitle = this.props.titles[4];
        let location = this.props.info.location;

        return(
            <div>

            <CrossContainer
                onClick={this.handleClick.bind(this)}>
            <Cross sizes={cross}/>
          </CrossContainer>

            <Title>{title}</Title>

            <SpaceBetween/>

            <SubTitle>{timeTitle}</SubTitle>
            <Time>{timeStamp}</Time>

            <SpaceBetween/>

            <SubTitle>{linkTitle}</SubTitle>
            
            <Tickets 
                href={link}
                target="_blank">
                {linkText}
            </Tickets>

            <SpaceBetween/>

            <SubTitle>{locationTitle}</SubTitle>
            <Location 
                href={getMapsLink(this.props.info)}
                target="_blank">
                {location}
            </Location>

            </div>
        )
    }
}

const CrossContainer = styled.div`
    position: absolute;    
    left: 75vw;
`

const Cross = styled(Img)`
    width: 3vw;
    z-index: 3;
    cursor: pointer;
    &:hover{
        width: 4vw;
    }
`

const Title = styled.div`
    font-size: 2vw;
    font-weight: 700;
    margin: 20vh 0vw 5vh 40vw
`

const SubTitle = styled.div`
    font-size: 1.8vw;
    font-weight: 500;
    text-align: center;
`

const SpaceBetween = styled.div`
    margin: 7vh 0vw 0vh 0vw;
`

const Time = styled.div`
    left: 20vw;
    text-align: center;
`

const Tickets = styled.a`
    text-align: center;
    display: block;
`

const Location = styled.a`
    text-align: center;
    display: block;
`