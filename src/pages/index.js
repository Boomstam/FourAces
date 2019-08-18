import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import HomeImg from '../components/homeImg';
import Overlay from '../components/overlay';
import ClickDetector from '../components/clickDetector';

const offsetMod = 0.57;

function moveLeft()
{
  let width = window.outerWidth;
  
  window.scrollTo(width * offsetMod, 0);
}

function getImgNodeByName(data, name)
{
  return data.allImageSharp.edges.find(
    obj => { 
      return obj.node.fluid.originalName === name;
    }
    ).node;
}

const IndexPage = ({ data }) => (
  <div onLoad={moveLeft}>
  <ClickDetector coors={data.allMarkdownRemark.edges}/>

  <Layout style={{ zIndex: "0" }}/>
  <HomeImg image={getImgNodeByName(data, "Schilderij.jpg")}/>
  
  <Overlay image={getImgNodeByName(data, "ScriabinCut.png")}/>
  <Overlay image={getImgNodeByName(data, "BizetCut.png")}/>
  <Overlay image={getImgNodeByName(data, "ChopinCut.png")}/>
  <Overlay image={getImgNodeByName(data, "BachCut.png")}/>
  <Overlay image={getImgNodeByName(data, "QuartetCut.png")}/>
  <Overlay image={getImgNodeByName(data, "MozartCut.png")}/>
  <Overlay image={getImgNodeByName(data, "DebussyCut.png")}/>
  <Overlay image={getImgNodeByName(data, "RachmaninoffCut.png")}/>

  </div>

)

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
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
    allMarkdownRemark {
        edges {
          node {
            rawMarkdownBody
          }
        }
      }
    allFile (filter: { ext: { eq: ".mp3" } }){
    edges{
      node
        {
          name
          publicURL
      	}
      }
    }
  }
`