import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Products from "../components/products";
import ZoomBgImg from '../components/zoomBgImg';

const imgName = "Shop.png";
const style = { width: "100vw", transform:"translateY(-40vh)" };

export default ({ data }) => (  
<Layout>
    <Products/>

    <ZoomBgImg 
          imgName={imgName}
          customStyle={style}/>
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