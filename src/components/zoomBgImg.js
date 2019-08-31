import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import storage from '../storage/storage';

const posKeyword = "position";
const posValKeyword = "fixed";

function getImg(imgName){
    
    return storage.imageStorage.getImageByName(imgName);
}

export default class ZoomBgImg extends React.Component {

    constructor(props){
        
        super(props);
    }

    render(){
        let style = this.props.customStyle;

        if(!style){
            style = {};
        }
        style[posKeyword] = posValKeyword;//Only works through here; not in styled comp
        
        return(


                <StyledImg 
                    style={style}
                    sizes={getImg(this.props.imgName)}/>
        )
    }
}
//margin: 1vh 0vw 0vh 1vw
const StyledImg = styled(Img)`

    width: 100vw;
    left: 0;
    top: 0;
    z-index: -1;
    opacity: 0.25;
`