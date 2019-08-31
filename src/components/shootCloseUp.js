import storage from '../storage/storage';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const imgName = "Shoot";
const imgExt = ".png";
const numImg = 12;

export default class ShootCloseUp extends React.Component {

    constructor(props){

        super(props);
    }

    render(){

        return(
            <Canvas>
                <CloseUp onClick={this.props.callback}>
                    <StyledImg sizes={this.props.image}/>
                </CloseUp>
            </Canvas>
        )
    }
}

const Canvas = styled.div`
    
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    background-color: rgba(15, 15, 15, 0.6);
`

const CloseUp = styled.div`
    
    &:hover{
        border-style: solid;
        border-width: 2px;
    }
    cursor: pointer;
    margin: 10vh 0vw 10vh 20vw;
    width: 60vw;
` 

const StyledImg = styled(Img)`


`