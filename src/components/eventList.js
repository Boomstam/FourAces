import React from 'react';
import styled from 'styled-components';
import storage from '../storage/storage';
import EventInfo from './eventInfo';

const textType = "Other";
const numColumns = 5;
const firstEventTop = 40;
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
        console.log("Handled like a bows_" + eventIndex);

        this.setState({ index: eventIndex });
    }

    closeInfo()
    {
        console.log("Closed Info_");

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

                <Where style={{fontWeight: "800", fontSize: "2.5vw"}}>{titles[1]}</Where>
                <When style={{fontWeight: "800", fontSize: "2.5vw"}}>{titles[2]}</When>

                {events.map((event, i) => 
                    <Event>
                        <Border 
                        onClick={(e) => {this.handleClick(i)}}
                        style={{top: (firstEventTop + (i * spaceBetween)) + heightSuffix}}/>
                    <Where style={{top: (firstEventTop + (i * spaceBetween)) + heightSuffix}}>
                        {event[0]}
                    </Where>
                    <When style={{top: (firstEventTop + (i * spaceBetween)) + heightSuffix}}>
                        {event[1]}
                    </When>
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

const Border = styled.div`
    border-style: solid;
    border-weight: 1px;
    position: absolute;
    left: 13vw;
    width: 75vw;
    height: 6vh;
    z-index: 3;
`


const TopMargin = styled.div`
    margin: 20vh 0vw 0vh 5vw;  
`

const Title = styled.div`
    font-size: 2vw;
    font-weight: 700;
    margin: 15vh 0vw 5vh 40vw
`

const Where = styled.div`
    font-size: 1.5vw;
    position: absolute;
    left: 20vw;
`

const When = styled.div`
    font-size: 1.5vw;
    position: absolute;
    left: 70vw;
`

const Event = styled.div`
    
    
`


/*
<div>
                <StyledTitleList>{titles.map((title, i) => 
                    <StyledTitle>{title}</StyledTitle>)}
                </StyledTitleList>
        
        <div>

<div>
        {titles.map((title, i) => 
            <StyledDataList>{events[i].map((data, i) =>
                <StyledData> {data} </StyledData>)}
            </StyledDataList>)}
        
        </div>*/