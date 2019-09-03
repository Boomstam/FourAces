import React from 'react';
import Layout from '../components/layout';
import ContactInfo from '../components/contactInfo';
import styled from 'styled-components';
import ZoomBgImg from '../components/zoomBgImg';

const imgName = "Contact.png";
const style = { width: "100vw", transform:"translateY(-50vh)" };

/*export default class Contact extends React.Component
{
    render()
    {
            return(
                <Layout>
                    <ContactInfo/>
                    <ZoomBgImg 
                        imgName={imgName}
                        customStyle={style}/>
                </Layout>)

                
    }
}*/

export default ({ data }) => (  
    <Layout>
        <ContactInfo
              pressKits={data}/>
    
        <ZoomBgImg 
              imgName={imgName}
              customStyle={style}/>
      </Layout>
    )

    export const query = graphql`  
    query {
          
          allFile(filter: { extension: { eq: "zip" } }) {
            edges {
              node {
                publicURL
              }
            }
          }
      }
`
/*const Title = styled.div`

`

const Info = styled.div`

`*/