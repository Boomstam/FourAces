import React from 'react';
import Layout from '../components/layout'
import storage from '../storage/storage'
import styled from 'styled-components'

const title = "Four Aces Guitar Quartet";
const textType = "Details";

export default class Biography extends React.Component
{
    render()
    {
        var bio = storage.textStorage.getText(textType, 4);

        console.log(bio);

        return(
            <div>
                <Title>{title}</Title>
                <Text dangerouslySetInnerHTML={{ __html: bio.html}}/>
            </div>
        )
    }
}

const Title = styled.div`
    font-size: 3vw;
    font-weight: 700;
    margin: 20vh 0vw 10vh 34vw;
`


const Text = styled.div`

  font-size: 1.5vmax;
  font-weight: 400;
  margin: 0vh 0vw 0vh 20vw;
  width: 60vw;
  z-index: 1; 
`
/*
left: 30vw;
  top: 30vh;
*/