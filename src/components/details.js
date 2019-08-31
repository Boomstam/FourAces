import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import storage from '../storage/storage';

const detailsType = "Details";
const crossName = "Cross.png";

class Details extends React.Component {

    constructor(props) {
      
      super(props);
    }

      handleClick()
      { 
        this.props.customClick();

        storage.callbackStorage.toggleHomeImgPos();
        
        for(let i = 0; i < storage.composerStorage.numComposers; i++)
        {    
          storage.callbackStorage.toggleOverlays[i](); 
        }
      }

      render() {

        var index = this.props.index;
        
        var scene = storage.imageStorage.getSceneByIndex(index);
        var cross = storage.imageStorage.getImageByName(crossName);

        //<ClickScreen onClick={this.handleClick.bind(this)}/>
        return(
          <div>
          <Curtain/>

          <CrossContainer
            onClick={this.handleClick.bind(this)}>
          <Cross sizes={cross}/>
          </CrossContainer>

          <Content>
          <Composer>
              {storage.textStorage.getText(detailsType, index).frontmatter.composer}
                </Composer>
            <Scene sizes={scene}/>
              <Title>
              {storage.textStorage.getText(detailsType, index).frontmatter.title}
                </Title>
                <Text dangerouslySetInnerHTML={{ __html: storage.textStorage.getText(detailsType, index).html}}/>
          </Content>
          </div>
          )
        }
      }

export default Details;

const CrossContainer = styled.div`

`

const Cross = styled(Img)`
  width: 3vw;
  margin: 17vh 0vw 0vh 85vw;
  z-index: 3;
  cursor: pointer;
  &:hover{
    width: 4vw;
  }
`

const Curtain = styled.div`
background-color: rgba(200, 200, 200, 0.9);

  width: 100vw;
  height: 100vh;
    @media (min-width: 650px) {
    position: fixed;
    }
    position: fixed;
    left: 0;
    top: 0;
`

/*const ClickScreen = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
`*/

const Content = styled.div`
position: absolute;
@media (min-width: 650px) {
  position: absolute;
}
  left: 0vw;
  top: 0vh;
  width: 100vw;
  z-index: 1;
`

const Scene = styled(Img)`
position: relative;
@media (min-width: 650px) {
  position: absolute;

  left: 5vw;
  top: 15vh;
  width: 20vw;
  margin: 0vh 0vw 0vh 0vw;;
}
margin: 0vh 0vw 0vh 15vw;
width: 70vw;
z-index: 1;
`

const Composer = styled.div`
position: relative;
@media (min-width: 650px) {
  position: absolute;
  font-size: 2vw;

  left: 30vw;
  top: 15vh;
  width: 60vw;
  text-align: left;
  margin: 0vh 0vw 0vh 0vw;;
}
  text-align: center;
  
  width: 70vw;
  z-index: 1;
  font-size: 6vw;
  font-weight: 800;

  margin: 15vh 0vw 0vh 15vw;
`

const Title = styled.div`
position: relative;
@media (min-width: 650px) {
  position: absolute;
  font-size: 1.5vw;

  left: 30vw;
  top: 22vh;
  width: 60vw;
  margin: 0vh 0vw 0vh 0vw;
}
  
  width: 70vw;
  z-index: 1;
  font-size: 4vw;
  font-weight: 600;
  margin: 3vh 0vw 3vh 15vw;
`

const Text = styled.div`
position: relative;
@media (min-width: 650px) {
  position: absolute;
  font-size: 1.5vw;
  
  left: 30vw;
  top: 30vh;
  width: 60vw;
  margin: 0vh 0vw 0vh 0vw;
}
  font-size: 3vw;
  font-weight: 400;
  
  margin: 0vh 0vw 0vh 15vw;
  width: 70vw;
  z-index: 1;
`