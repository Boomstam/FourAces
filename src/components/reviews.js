import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery } from 'gatsby';
import styled from 'styled-components';
import { Page, Document } from 'react-pdf';

const forAcesTitle = "in_IETS_POOLS"
const forAcesKey = "For Aces";

const viwTitle = "in 'Vlamingen in de Wereld'"
const viwKey = "Vlamingen";

function getReviews(data)
{
    console.log("review requested_" + JSON.stringify(data));
    
    var forAcesReview = data.allFile.edges.find(
        obj => { 
            
            return obj.node.publicURL.includes(forAcesKey);
          }).node.publicURL;
    
          var viwReview = data.allFile.edges.find(
            obj => { 
                
                return obj.node.publicURL.includes(viwKey);
              }).node.publicURL;

    var reviewColl = [forAcesReview, viwReview];

  return reviewColl;
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
      
        render={data => (

            <ReviewColl>
          
          <SubTitle>{forAcesTitle}</SubTitle>

            <Document file={getReviews(data)[0]}>
                <Page pageNumber={1} />
            </Document>

            <Document file={getReviews(data)[0]}>
                <Page pageNumber={2} />
            </Document>

            <SubTitle>{viwTitle}</SubTitle>

            <Document file={getReviews(data)[1]}>
            <Page pageNumber={1} />
            </Document>

            </ReviewColl>
        )}
    />
)

const SubTitle = styled.div`
          font-size: 2vw;
          text-align: center;
          margin: 2vh 0vw 2vh 0vw;
`

const ReviewColl = styled.div`
  margin: 15vh 30vw 0vh 30vw;
`