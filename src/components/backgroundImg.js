import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Media from 'react-media';

const offsetMod = 0.55;

const home = "/";

class BackgroundImg extends React.Component {

  render() {
    
    if(typeof window !== 'undefined')
    {
    
    const { images } = this.props;
    
    if(window.location.pathname === home)
    {
        return(<div/>)
    }
    if(images === undefined)
    {
        return(<div/>)
    }
    return (
        
        <Container>
        <Media query={{ maxWidth: 650 }}>
          {matches =>
            matches ? (
                
              <BgImg
              sizes={images.treeImg}
              style={{position: "fixed"}}
              >
              </BgImg>
            ) : (
              <BgImg
              sizes={images.bgImg}
              style={{position: "fixed"}}
              >
              </BgImg>
            )
          }
        </Media>
        {this.props.children}
        </Container>
        
    )
  } else
  {
    return (<div/>)
  }
}
}
BackgroundImg.propTypes = {
  images: PropTypes.array.isRequired,
}

export default BackgroundImg;

const Container = styled.div`

`
//zIndex:-3;

const BgImg = styled(Img)`

    left: 0;
    top: 0;
    width: 100vw;
    z-index: -3;
    opacity: 0.15;
`