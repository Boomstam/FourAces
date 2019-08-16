import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import storage from '../storage/storage'

function loadText(data)
{
  console.log("loadText");
  
  storage.textStorage.setText(data.allMarkdownRemark);
}

const TextFinder = ({ children }) => (
  <StaticQuery
    query={graphql`
        query TextQuery {

          allMarkdownRemark {
      edges {
        node {
          frontmatter{
            title
            language
            type
            index
            
            composer

            infoTitle
            mailTitle
            bookingsTitle
            mailList
            mailListLink
            bookingBelgium
            bookingUSA
            bookingOther

            calTitles
          }
          html
        }
      }
    }

    }
      `}

    render={data => (
      <>
      <div onLoad={loadText(data)}/>
        {children}
      </>
    )}
    />
    )
    //<Img sizes={data.allImageSharp.edges[3].node.sizes}/>
    
export default TextFinder;