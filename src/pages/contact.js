import React from 'react';
import Layout from '../components/layout';
import ContactInfo from '../components/contactInfo';
import storage from '../storage/storage';
import styled from 'styled-components'; 

export default class Contact extends React.Component
{
    render()
    {
            return(
                <Layout>
                <ContactInfo/>
                </Layout>)
    }
}

const Title = styled.div`

`

const Info = styled.div`

`