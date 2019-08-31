import React from 'react';
import styled from 'styled-components';
import storage from '../storage/storage';
import EventInfo from './eventInfo';

const textType = "Other";
const numColumns = 5;
const firstEventTop = 30;
const spaceBetween = 8;
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
            <div>
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
        </div>
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

const Title = styled.div`
    font-size: 2vw;
    font-weight: 700;
    margin: 15vh 0vw 0vh 40vw
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
    left: 13vw;
    width: 75vw;
    height: 6vh;
    z-index: 3;
`

const Date = styled.div`
    font-size: 1.5vw;
    position: absolute;
    left: 15vw;
`
    
const City = styled.div`
    font-size: 1.5vw;
    position: absolute;
    left: 40vw;
`

const Venue = styled.div`
    font-size: 1.5vw;
    position: absolute;
    left: 65vw;
`