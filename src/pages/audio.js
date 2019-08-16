import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Spotify from "../components/spotify"

class Audio extends React.Component {

render(){
  return(
<Layout>
  <Spotify/>
  </Layout>
)}
  }

export default Audio;