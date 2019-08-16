import Img from 'gatsby-image';
import { Keyframes } from "react-spring/renderprops";
import React from 'react';
import CoorParser from '../helpers/CoorParser';
import styled from 'styled-components';
import storage from '../storage/storage'

const detailsType = "Details";

class CompDetails extends React.Component {

    constructor(props) {
      
        super(props);
      }
    render(){
        var index = this.props.index;
        var scene = storage.imageStorage.getSceneByIndex(index);

        var even = ((index % 2) === 0);
        console.log("even_" + even);

        if(even)
        {
        return(
            <Content>
                <LeftTextBlock>
            <Composer>
                {storage.textStorage.getText(detailsType, index).frontmatter.composer}
                  </Composer>
                <Title>
                {storage.textStorage.getText(detailsType, index).frontmatter.title}
                  </Title>
                  <Text dangerouslySetInnerHTML={{ __html: storage.textStorage.getText(detailsType, index).html}}/>
              </LeftTextBlock>
              <RightScene sizes={scene}/>
            </Content>
            )
        }
        return(
            <Content>
              <LeftScene sizes={scene}/>
                <RightTextBlock>
            <Composer>
                {storage.textStorage.getText(detailsType, index).frontmatter.composer}
                  </Composer>
                <Title>
                {storage.textStorage.getText(detailsType, index).frontmatter.title}
                  </Title>
                  <Text dangerouslySetInnerHTML={{ __html: storage.textStorage.getText(detailsType, index).html}}/>
              </RightTextBlock>
            </Content>
            )
        }
          
 }

export default CompDetails;

const Content = styled.div`
  
  width: 80vw;
  z-index: 1;
  margin: 0vh 10vw 7vh 0vw;
  display: flex;
  justify-content: space-between;
  `

const LeftTextBlock = styled.div`

`

const RightTextBlock = styled.div`
width: 55vw;
`
//margin: 0vh 0vw 0vh 3vw;

const RightScene = styled(Img)`
position: absolute;
left: 5vw;
width: 20vw;
z-index: 1;
`

const LeftScene = styled(Img)`
position: absolute;
width: 20vw;
z-index: 1;

`
//top: 15vh;

const Composer = styled.div`
  left: 30vw;
  top: 15vh;
  width: 60vw;
  z-index: 1;
  font-size: 2vmax;
  font-weight: 800;
`

const Title = styled.div`
  left: 30vw;
  top: 22vh;
  width: 60vw;
  z-index: 1;
  font-size: 1.75vmax;
  font-weight: 600;
`

const Text = styled.div`
  font-size: 1.5vmax;
  font-weight: 400;
  left: 30vw;
  top: 30vh;
  width: 60vw;
  z-index: 1; 
`