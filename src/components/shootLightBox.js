import storage from '../storage/storage';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import ShootCloseUp from './shootCloseUp';

const imgName = "Shoot";
const imgExt = ".png";
const numImg = 12;

export default class ShootLightBox extends React.Component {

    constructor(props){

        super(props);
        
        this.setState({ currentImage: null });
    }

    reset(){
        
        this.setState({ currentImage: null });
    }

    handleClick(image){

        this.setState({ currentImage: image });
    }

    getImages() {
        let images = [];
        for (let i = 0; i < numImg; i++) {
            let totalName = imgName + (i + 1) + imgExt;
            images[i] = storage.imageStorage.getImageByName(totalName);
        }
        return images;
    }

    getShowCloseUp() {
        let showCloseUp = true;

        if (this.state === null) {
            showCloseUp = false;
        }
        else if (this.state.currentImage === null) {
            
            showCloseUp = false;
        } else {
            return showCloseUp;
        }
    }

    render(){

        let images = this.getImages();
        let showCloseUp = this.getShowCloseUp();
        
        if(showCloseUp){
            
            return(<ShootCloseUp 
                    image={this.state.currentImage}
                    callback={this.reset.bind(this)}/>)
        } else {
            
        return(

            <LightBox>
                {images.map((image, i) => 
                    <ImgContainer 
                        onClick={(e) => {this.handleClick(image)}}>
                        <Light>
                            <Image sizes={image}/>
                        </Light>
                    </ImgContainer>
                    )}
            </LightBox>
        )}
    }
}
const LightBox = styled.div`

    margin: 20vh 0vw 10vh 7.5vw;
    display: grid;
    grid-template-columns: repeat(3, 25vw);
    grid-gap: 5vw;
`

const ImgContainer = styled.div`

    width: 100%;
    height: 100%;
    position: relative;
`

//background-image: none;
const Light = styled.div`

    width: 100%;
    height: 100%;
    z-index: 2;
    background-size: cover;

    cursor: pointer;

    &:hover {
        
        border-style: ridge;
        border-color: black;
        border-width: 1px;
    }
    `
    
    //background-image: radial-gradient(rgba(0,0,0, 0.4), rgba(255,255,255, 0.7));
    //background-image: radial-gradient(rgba(0,0,0, 1), rgba(255,255,255, 1));
    
    //COLLAPSING MARGINS????
const Image = styled(Img)`
    margin: 0% 0% 0% 0%;
    width: 100%;
    height: 100%;

    &:hover{
    }
    `
    //background-image: linear-gradient(to top, rgba(255,255,255,0), rgba(255,255,255,1));
    //width: 90%;
    //margin: 10% 0% 0% 0%;

    /*

        border-style: solid;
        border-width: 1px;
        border-color: rgba(0, 0, 0, 1);
    */