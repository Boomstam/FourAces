import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import Lightbox from '../components/Lightbox'
import styled from 'styled-components'

const IndexPage = ({ data }) => (
  <div>
  <Layout>
   </Layout>
    <Background>
      <Lightbox images={data.allImageSharp.edges}>
      </Lightbox>
    </Background>
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
          sizes(maxWidth: 1800) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
  }
`
const Background = styled.div`
  background-image: radial-gradient(white, black);
  @media (min-width: 600px) {
  position: fixed;
  top: 10vh;
  right: 0;
  bottom: 0;
  left: 0;
  }
  opacity: 0.9;
`