import React from 'react';
import Sound from 'react-sound-frank';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Title extends React.Component {

    render() {
        return (
            <StyledTitle>
                Four Aces Guitar Quartet
          {this.props.children}
            </StyledTitle>
        )
    }
}

export default Title;

const StyledTitle = styled.div`
    font-family: 'Dancing Script';
    color: rgb(229, 228, 227);
    margin: 3vh 0vw 5vh 0vw;
    padding: 0vh 0vw 0vh 0vw;
    text-align: center;
    display: inline-block
    width: 80%;
    font-size: 9vmin;
    background: rgba(66, 9, 16, 0.6);
`