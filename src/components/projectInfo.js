import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';
import storage from '../storage/storage'
import Img from 'gatsby-image';
import CompDetails from './compDetails'

const infoType = "Info";

export default class ProjectInfo extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render(){
        const text = storage.textStorage.getText(infoType, 0);

        //console.log("Text_" + text);
        return(
            <div>
                <DetailContainer>
                <Title>
                    {text.frontmatter.title}
                </Title>
                <Intro dangerouslySetInnerHTML={{ __html: text.html}}/>
                <CompDetails index="0"/>
                <CompDetails index="1"/>
                <CompDetails index="2"/>
                <CompDetails index="3"/>
                <CompDetails index="4"/>
                <CompDetails index="5"/>
                <CompDetails index="6"/>
                <CompDetails index="7"/>
                </DetailContainer>
            </div>
        )
    }
}

const DetailContainer = styled.div`
    position: absolute;
    top: 20vh;
    left: 10vw;
`

const Title = styled.div`
    font-size: 3vmax;
  font-weight: 700;
  margin: 0vh 0vw 10vh 30vw
`

const Intro = styled.div`
font-size: 1.5vmax;
  font-weight: 400;
  
  width: 60vw;
  margin: 0vh 0vw 0vh 10vw
`