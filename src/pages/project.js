import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ProjectInfo from "../components/projectInfo"

export default ({ data }) => (  
<Layout>
    <ProjectInfo/>
  </Layout>
)

export const query = graphql`  
    query {    
        site {      
            siteMetadata {        
                title      
            }    
        } 
    }
`