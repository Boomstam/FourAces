import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SpotifyPlayer from 'react-spotify-player';
 
// size may also be a plain string using the presets 'large' or 'compact'
const size = {
  width: '100%',
  height: 300,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'
 


export default ({ data }) => (  
<Layout>
    
<SpotifyPlayer
  uri="spotify:album:6Z8ucC2nIYbEtnOCyMXrZU"
  size={size}
  view={view}
  theme={theme}/>

  <SpotifyPlayer
  uri="spotify:album:3HNTBYxmRSOrYYFdabWn3Z"
  size={size}
  view={view}
  theme={theme}/>
    <p>
    </p>
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