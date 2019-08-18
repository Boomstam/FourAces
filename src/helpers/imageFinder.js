
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import storage from '../storage/storage'

function loadImages(data)
{
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