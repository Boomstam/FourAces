import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import ProjectInfo from "../components/projectInfo";
import BackgroundImg from '../components/backgroundImg';

const bgImgName = "Schilderij.jpg";
const treeImgName = "Tree.jpg";

function getBGImages(data){//DONT SWITCH TO STORAGE!!! Loads before imagefinder

    var bgImg = getImageByName(data, bgImgName);
    var treeImg = getImageByName(data, treeImgName);
    
    var images = { bgImg, treeImg };

  return images;
}

function getImageByName(data, name){
    return data.allImageSharp.edges.find(
        obj => { 
          return obj.node.fluid.originalName === name;
        }
        ).node.sizes;
}

export default ({ data }) => (  
<Layout>
    <ProjectInfo/>

    <BackgroundImg 
          images={getBGImages(data)}/>
  </Layout>
)

export const query = graphql`  
    query {    
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
`