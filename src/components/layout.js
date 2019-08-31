import React from 'react';
import { StaticQuery } from 'gatsby';
import TextFinder from '../helpers/textFinder';
import ImageFinder from '../helpers/imageFinder';
import Togglables from './togglables';
import GoogleFontLoader from 'react-google-font-loader';
import Hamburger from './hamburger';
import Language from './language';

const bannerImgName = "Banner.png";

function getImageByName(data, name)
{
  return data.allImageSharp.edges.find(
    obj => { 
      return obj.node.fluid.originalName === name;
    }
    ).node.sizes
}

export default ({ children }) => (

  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
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
      <div style={{ fontFamily: 'Livvic' }}>
        <GoogleFontLoader
      fonts={[
        {
          font: 'Nunito',
          weights: [400, 700],
        },
        {
          font: 'Livvic',
          weights: [400, 700],
        },
      ]}
        />

        <TextFinder/>
        <ImageFinder/>
        <Language/>

        <Hamburger/>
        <Togglables bannerImg={getImageByName(data, bannerImgName)}/>

        {children}

      </div>
    )}
    />
    )