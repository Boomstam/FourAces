import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import state from '../state/state'

const hamburgerImageName = "Arm.png";

function hamburgerClick()
{
  //console.log("hamburger click");

  state.menuToggler.toggleMenu();
}

function getHamburgerImage(data)
{
  return getImageByName(data, hamburgerImageName);
}

function getImageByName(data, name)
{
  return data.allImageSharp.edges.find(
    obj => { 
      return obj.node.fluid.originalName === name
    }
    ).node.sizes
}

const Hamburger = ({ children }) => (
  <StaticQuery
    query={graphql`
        query HamburgerQuery {

          allImageSharp {
      edges {
        node {
          fluid
              {
                originalName
              }
          sizes(maxWidth: 1800) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }

    }
      `}

    render={data => (
      <>
        <div>
          <StyledHamburger onClick={hamburgerClick}>
            <StyledImg sizes={getHamburgerImage(data)} />
            <StyledImg sizes={getHamburgerImage(data)} />
            <StyledImg sizes={getHamburgerImage(data)} />
          </StyledHamburger>
        </div>
        {children}
      </>
    )}
  />
)

const StyledHamburger = styled.div`

z-index: 999;
  position: fixed;
  top: 2vh;
  left: 2vw;
  overflow: visible;
  width: 3vw;
  
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 650px) {
    width: 13vw;
  
    &:hover {
      cursor: pointer;
    }
  }
  
`

const StyledImg = styled(Img)`
  
  width: 100%;
  overflow: visible;
  margin: 1vh 5vw 0vh 0vw;

  @media (max-width: 650px) {
    margin: 1vh 5vw 0vh 0vw;
  }
`

export default Hamburger;