import React from 'react';
import { StaticQuery } from 'gatsby';
import Sponsors from './sponsors';
import Language from './language';
import TextFinder from '../helpers/textFinder';
import ImageFinder from '../helpers/imageFinder';
import BackgroundImg from './backgroundImg';
import Nav from './nav';

const bannerImgName = "Banner.png";
const bgImgName = "Schilderij.jpg";
const treeImgName = "Tree.jpg";

function getImageByName(data, name)
{
  return data.allImageSharp.edges.find(
    obj => { 
      return obj.node.fluid.originalName === name
    }
    ).node.sizes
}

function getBGImages(data)
{
  var bgImg = getImageByName(data, bgImgName);
  var treeImg = getImageByName(data, treeImgName);

  var images = { bgImg, treeImg };
 
  return images;
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
/*
<Banner
              sizes={getImageByName(data, bannerImgName)}
              style={{
              position: "fixed"
              
            }}/>
*/
      <div>
        
        <Language/>
        <TextFinder/>
        <ImageFinder/>
        
        

        <Nav bannerImg={getImageByName(data, bannerImgName)}/>
        
        <Sponsors/>

        <BackgroundImg 
          images={getBGImages(data)}/>

        {children}
        


      </div>
    )}
    //sizes={getImageByName(data, bgImgName)}
    />
    )
    /*


@media (max-width: 650px) {
    position: fixed;
    margin: 3vh 0vw 1vh 10vw;
    display: inline;
  }*/

  /*
   @media (max-width: 650px) {
    position: fixed;
    top: 10vh;
    left: 10vw;
    width: 20vw;
    height: 50vh;
  }
  z-index: 999

  
  top: 0;
  opacity: 1;
  width: 80vw;
  */
  //position: fixed;

  /*const BGImage = styled(Img)`
    position: fixed;
    opacity: 0.3;
    width: 100vw;
    //height: 100vh;
    
    z-index: -999;
  }
  
  `*/