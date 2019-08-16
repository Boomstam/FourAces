import React from 'react';
import styled from 'styled-components'
import storage from '../storage/storage'

const textType = "Other";
const numColumns = 5;
const firstEventTop = 40;
const spaceBetween = 5;
const heightSuffix = "vh";

export default class EventList extends React.Component
{
    render()
    {
        var events = storage.calStorage.getEvents();
        var titles = [];

        for(let i = 0; i < numColumns; i++)
        {
            titles.push(storage.textStorage.getText(textType, i));
        }
        return(
            <div>
                <Title>{titles[0]}</Title>

                <Where>{titles[1]}</Where>
                <When>{titles[2]}</When>

                {events.map((event, i) => 
                    <div>
                    <Where style={{top: (firstEventTop + (i * spaceBetween)) + heightSuffix}}>
                        {event[0]}
                    </Where>
                    <When style={{top: (firstEventTop + (i * spaceBetween)) + heightSuffix}}>
                        {event[1]}
                    </When>
                    </div>)}                
        </div>
        )
    }
}

const TopMargin = styled.div`
    margin: 20vh 0vw 0vh 5vw;  
`

const Title = styled.div`
    font-size: 2vw;
    font-weight: 700;
    margin: 15vh 0vw 5vh 40vw
`

const Where = styled.div`
    position: absolute;
    left: 15vw;
`

const When = styled.div`
    position: absolute;
    left: 60vw;
`

const StyledTitleList = styled.div`
    margin: 20vh 0vw 0vh 5vw;
`

const StyledTitle = styled.div`
    display: inline;
    margin: 0vh 0vw 0vh 10vw;
    width: 50vw;
`

const StyledDataList = styled.div`
    margin: 5vh 0vw 0vh 5vw;
`

const StyledData = styled.div`
    display: inline;
    margin: 20vh 0vw 0vh 10vw;
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