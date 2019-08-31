import storage from '../storage/storage';
import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const inKeyword = "in ";
const kievLink = "https://en.theoutlook.com.ua/article/7348/the-four-aces-guitar-quartet-kicked-off-the-celebrations-of-25-years-of-diplomatic-relations-between-ukraine-and-belgium.html";
const kievText = "'Outlook'";
const standaardLink = "http://www.standaard.be/cnt/dmf20161108_02563344";
const standaardText = "'deStandaard'";
const dsENKey = "deStandaard";
const viwText = "'Vlamingen in de Wereld'";
const viwKey = "Vlamingen";

const nlFlag = "NL.png";
const ukFlag = "UK.png";

function getReviewURL(data, key)
{
    
    let review = data.allFile.edges.find(
        obj => { 
            
            return obj.node.publicURL.includes(key);
        }).node.publicURL;

  return review;
}

export default () => (
    <StaticQuery
        query={graphql`
        query ReviewQuery {
          
            allFile(filter: { extension: { eq: "pdf" } }) {
              edges {
                node {
                  publicURL
                }
              }
            }
        }
      `} 
      
        render={ data => (

            <Container>
                <StyledLink
                    href={kievLink}
                    target="_blank">
                    {inKeyword + kievText}
                </StyledLink>
                <Line/>
                <StyledLink
                    href={standaardLink}
                    target="_blank">
                    {inKeyword + standaardText}
                </StyledLink>
                    <FlagLink 
                        href={getReviewURL(data, dsENKey)}
                        target="_blank">
                        <FlagImg sizes={storage.imageStorage.getImageByName(ukFlag)}/>
                    </FlagLink>
                <Line/>
                <StyledLink
                    href={getReviewURL(data, viwKey)}
                    target="_blank">
                    {inKeyword + viwText}
                </StyledLink>
                <Line/>
            </Container>
        )}
    />
    )

const Container = styled.div`

    margin: 20vh 0vw 0vh 0vw;
    text-align: center;
`

const StyledLink = styled.a`

    font-size: 2vw;
    width: 20vw;
    &:hover{
        text-decoration: underline;
    }
`

const Line = styled.div`

    margin: 10vh 0vw 10vh 30vw;
    width: 40vw;
    border-style: solid;
    border-width: 1px;
`

const FlagLink = styled.a`

`

const FlagImg = styled(Img)`
margin: 2vh 0vw 2vh 48vw;
    width: 4vw;
`