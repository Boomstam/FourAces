import React from 'react';
import styled from 'styled-components';
import storage from '../storage/storage';
import EventInfo from './eventInfo';

const textType = "Other";
const numColumns = 5;
const firstEventTop = 28;
const spaceBetween = 10;
const heightSuffix = "vh";

export default class EventList extends React.Component
{
    constructor(props)
    {
        super(props);

        this.setState({ index: -1 });

        this.closeInfo = this.closeInfo.bind(this);
    }

    handleClick(eventIndex)
    {
        this.setState({ index: eventIndex });
    }

    closeInfo()
    {
        this.setState({ index: -1 });
    }

    render()
    {
        var events = storage.calStorage.getEvents();
        var titles = [];

        for(let i = 0; i < numColumns; i++)
        {
            titles.push(storage.textStorage.getText(textType, i));
        }
        var stateNullOrNone = true;

        if(this.state !== null)
        {
            if(this.state.index > -1)
            {
                stateNullOrNone = false;
            }
        }
        if(stateNullOrNone)
        {
        return(
            <StyledEvents>
                <Title>{titles[0]}</Title>

                {events.map((event, i) => 
                    <Event>
                        <Border 
                        onClick={(e) => {this.handleClick(i)}}
                        style={{top: (firstEventTop + (i * spaceBetween)) + heightSuffix}}/>
                    <Date style={{top: (firstEventTop + (i * spaceBetween)) + heightSuffix}}>
                        {event.date}
                    </Date>
                    <City style={{top: (firstEventTop + (i * spaceBetween)) + heightSuffix}}>
                        {event.city}
                    </City>
                    <Venue style={{top: (firstEventTop + (i * spaceBetween)) + heightSuffix}}>
                        {event.venue}
                    </Venue>
                    </Event>)}                
        </StyledEvents>
        )}
        else{
            return(
                <EventInfo 
                customClick={this.closeInfo.bind(this)}
                info={events[this.state.index]}
                titles={titles}/>
            )
        }
    }
}

const StyledEvents = styled.div`
    
    @media (min-width: 650px) {
        font-size: 2.5vw;
    }
    @media (min-width: 850px) {
        font-size: 1.5vw;
    }
    font-size: 3.5vw;
`

const Title = styled.div`
    @media (min-width: 650px) {
        font-size: 2vw;
        margin: 15vh 0vw 0vh 40vw;
    }
    font-size: 5vw;
    margin: 15vh 0vw 0vh 30vw;
    font-weight: 700;
`

const Event = styled.div`
    padding: 0vh 0vw 10vh 0vw; 
`

const Border = styled.div`
    &:hover {
        border-width: 5px;
    }
    background-color: rgba(0, 0, 0, 0.1);
    border-width: 1px;
    border-style: solid;
    position: absolute;
    left: 5vw;
    width: 90vw;
    height: 9vh;
    z-index: 3;
`

const Date = styled.div`
    position: absolute;
    left: 15vw;
    width: 25vw;
`
    
const City = styled.div`
    position: absolute;
    left: 40vw;
    width: 25vw;
`

const Venue = styled.div`
    position: absolute;
    left: 65vw;
    width: 25vw;
`