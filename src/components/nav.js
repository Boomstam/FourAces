import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Hamburger from './hamburger';
import Menu from './menu';
import state from '../state/state';
import storage from '../storage/storage';

const bannerImgName = "Banner.png";

class Nav extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isOpen: false };

        if(window.innerWidth > storage.constStorage.smartphoneWidth)
        {
            this.state = { isOpen: true };
        }
        this.valueChanged = this.valueChanged.bind(this);
    }

    componentDidMount() {

        state.menuToggler.setReRenderCallback(this.valueChanged);
    }

    valueChanged() {

        let menuIsOpen = state.menuToggler.isOpen;

        this.setState({ isOpen: menuIsOpen });
    }

    render() {

        const image = this.props.bannerImg;

        if (this.state.isOpen) {

            return (
                <div>
                    <Banner
              sizes={image}
              style={{
              position: "fixed"
              
            }}/>
                    <Menu>
                    </Menu>
                    <Hamburger>
                    </Hamburger>

                </div>
            );

        } else {

            return (
                <div>
                    
                    <Hamburger>
                    </Hamburger>
                </div>
            );

        }
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
    left: 7vw;
}
width: 100vw;
height: 100vh;
z-index: 3;
top: 0;
`