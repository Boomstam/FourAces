import React from 'react';
import Img from 'gatsby-image';
import { Link, StaticQuery } from 'gatsby';
import ReactSVG from 'react-svg'
import styled from 'styled-components';

const imgName = "savarezColor.jpg"

function logoImage(data)
{   
  return data.allImageSharp.edges.find(
    obj => { 
      return obj.node.fluid.originalName === imgName
    }
    ).node.sizes;
}

export default () => (
    <StaticQuery
        query={graphql`
        query SavarezQuery {
          
            allImageSharp {
                edges {
                    node {
                        fluid{
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
            <StyledLink href="http://www.savarez.com/four-aces-guitar-quartet">

            <StyledLogo 
                sizes={logoImage(data)}/>

            </StyledLink>
        )}
    />
)

const StyledLink = styled.a`
@media (min-width: 650px) {
    left: 92vw;
    width: 7vw;
}
    position: fixed;
    left: 83vw;
    top: 5.5vh;
    padding: 1vmin;
    width: 16vw;
    z-index: 999;
`

const StyledLogo = styled(Img)`
    opacity: 0.7;
`