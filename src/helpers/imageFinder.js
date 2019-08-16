
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import storage from '../storage/storage'

function loadImages(data)
{
  console.log("loadImages");
  
  storage.imageStorage.setImages(data.allImageSharp.edges);
}

const ImageFinder = ({ children }) => (
  <StaticQuery
    query={graphql`
        query ImageQuery {

          allImageSharp {
      edges {
        node {
          sizes(maxWidth: 1800) {
            ...GatsbyImageSharpSizes
          }
          fluid{
            originalName
          }
        }
      }
    }

    }
      `}

    render={data => (
      <>
      <div onLoad={loadImages(data)}/>
        {children}
      </>
    )}
    />
    )
    
export default ImageFinder;