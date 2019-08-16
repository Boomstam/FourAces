import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from 'styled-components'
import GoogleFontLoader from 'react-google-font-loader'

export default ({ data }) => (  
<Layout>
    <GoogleFontLoader
      fonts={[
        {
          font: 'Roboto',
          weights: [400, '400i'],
        },
        {
          font: 'Roboto Mono',
          weights: [400, 700],
        },
      ]}
      subsets={['cyrillic-ext', 'greek']}
    />
    <h1>About {data.site.siteMetadata.title}</h1>     
    <p>
      Site about four aces.
    </p>
  </Layout>
)
/*


    <p style={{ fontFamily: 'Roboto Mono, monospaced' }}>This will be in Roboto Mono!</p>
    <p style={{ fontFamily: 'Roboto, sans-serif' }}>This will be in Roboto!</p>

*/
//<div style={{fontFamily = "Roboto"}}>Like this?</div>
export const query = graphql`  
    query {    
        site {      
            siteMetadata {        
                title      
            }    
        } 
    }
`

const Test = styled.div`
    font-family: Roboto,
`;