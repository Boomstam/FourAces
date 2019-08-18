import React from 'react';
import Layout from '../components/layout';
import storage from '../storage/storage';
import styled from 'styled-components';
import Img from 'gatsby-image';

const title = "Four Aces Guitar Quartet";
const imgName = "BioPic.jpg";
const textType = "Details";

export default class Biography extends React.Component
{
    render()
    {
        var bio = storage.textStorage.getText(textType, 4);

        var img = storage.imageStorage.getImageByName(imgName);

        if(img === undefined)
        {
            return(
                <div>
                    <Title>{title}</Title>
                    <Text dangerouslySetInnerHTML={{ __html: bio.html}}/>
                </div>
            )
        } else {
            return(
                <div>
                    <Title>{title}</Title>
                    <BioPic sizes={img}/>
                    <Text dangerouslySetInnerHTML={{ __html: bio.html}}/>
                </div>
            )
        }
    }
}

const Title = styled.div`
    font-size: 3vw;
    font-weight: 700;
    margin: 20vh 0vw 10vh 34vw;
`


const BioPic = styled(Img)`
    margin: 0vh 0vw 5vh 10vw;
    width: 80vw
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
