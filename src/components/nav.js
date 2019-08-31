import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Menu from './menu';

class Nav extends React.Component {

    render() {

        const image = this.props.bannerImg;

            return (
                <div style={{ fontFamily: 'Nunito' }}>
                    <Banner
              sizes={image}
              style={{
              position: "fixed"
                    }}/>
                    <Menu/>

                </div>
            );
        }
}

export default Nav;

const Banner = styled(Img)`
background-color: rgba(255, 255, 255, 1);
opacity: 0.4;
@media (min-width: 650px) {
    opacity: 1;
    background-color: transparent;
    width: 80vw;
    height: 14vh;
    left: 10vw;
}
width: 100vw;
height: 100vh;
z-index: 3;
top: 0;
`