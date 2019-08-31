import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery } from 'gatsby';
import styled from 'styled-components';

const facebook = "facebook.png";
const facebookLink = "https://www.facebook.com/FourAcesGuitarQuartet/";

const instagram = "instagram.png";
const instagramLink = "https://www.instagram.com/fouracesguitarquartet/";

const youtube = "youtube.png";
const youtubeLink = "https://www.youtube.com/user/FourAcesGQ";

const spotify = "spotify.png";
const spotifyLink = "https://open.spotify.com/artist/4QYs1g8YbpUTqkBpdT2Zs2";

const itunes = "itunes.png";
const itunesLink = "https://itunes.apple.com/us/artist/four-aces-guitar-quartet/770675648";

function getLinks(index)
{
    var links = [
        facebookLink,
        instagramLink,
        youtubeLink,
        spotifyLink,
        itunesLink
    ]
    return links[index];
}

function getLogos(data)
{
    var logos = [
        getImageByName(data, facebook),
        getImageByName(data, instagram),
        getImageByName(data, youtube),
        getImageByName(data, spotify),
        getImageByName(data, itunes)
    ]
    return logos;
}

function getImageByName(data, imgName)
{
    return data.allImageSharp.edges.find(
        obj => { 
          return obj.node.fluid.originalName === imgName;
        }
        ).node.sizes;
}

export default () => (
    <StaticQuery
        query={graphql`
        query LogosQuery {
          
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

            <StyledLogos>

                <StyledLink 
                    href={getLinks(0)}
                    target="_blank">
                    <StyledLogo 
                        sizes={getLogos(data)[0]}/>
                </StyledLink>

                <StyledLink 
                    href={getLinks(1)}
                    target="_blank">
                    <StyledLogo 
                        sizes={getLogos(data)[1]}/>
                </StyledLink>

                <StyledLink 
                    href={getLinks(2)}
                    target="_blank">
                    <StyledLogo 
                        sizes={getLogos(data)[2]}/>
                </StyledLink>

                <StyledLink 
                    href={getLinks(3)}
                    target="_blank">
                    <StyledLogo 
                        sizes={getLogos(data)[3]}/>
                </StyledLink>

                <StyledLink 
                    href={getLinks(4)}
                    target="_blank">
                    <StyledLogo 
                        sizes={getLogos(data)[4]}/>
                </StyledLink>

            </StyledLogos>
        )}
    />
)

const StyledLogos = styled.div`
    position: fixed;
    left: 94vw;
    top: 30vh;
    width: 3vw;
    z-index: 3;
    opacity: 0.7;
    `
    //background-color: rgba(200, 200, 200, 0.9);
//    padding: 0vh 2vw 2vh 2vw;

const StyledLink = styled.a`

`

const StyledLogo = styled(Img)`
    margin: 1vh 0vw 0vh 0vw;
    
`