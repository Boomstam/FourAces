import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import storage from '../storage/storage';

function loadText(data)
{
  storage.textStorage.setText(data.allMarkdownRemark);
}

const TextFinder = ({ children }) => (
  <StaticQuery
    query={graphql`
        query TextQuery {

          allMarkdownRemark {
      edges {
        node {
          frontmatter{
            title
            language
            type
            index
            
            composer

            infoTitle
            mailTitle
            bookingsTitle
            mailList
            mailListLink
            bookingBelgium
            bookingUSA
            bookingOther
            pressKitTitle
            pressKitLink

            calTitles

            subject
            namePlaceholder
            addressPlaceholder
            nameTag
            addressTag
            priceTag
            totalTag
            linkText
            disclaimer
            proceedText
            greeting
            order
            odysseeProduct
            odysseePrice
            forAcesProduct
            forAcesPrice
            tabulaRasaProduct
            tabulaRasaPrice
            puzzleProduct
            puzzlePrice
            combo1Product
            combo1Price
            combo2Product
            combo2Price
            total
            address
            shippingCost
            account
            goodbye
            tracksTitle
            odysseeTracks
            forAcesTracks
            tabulaRasaTracks
            puzzleInfo
          }
          html
        }
      }
    }

    }
      `}

    render={data => (
      <>
      <div onLoad={loadText(data)}/>
        {children}
      </>
    )}
    />
    )
    
export default TextFinder;