import React from 'react';
import Layout from '../components/layout';
import MyCal from '../components/myCal';
//de2aikh7oknjsbhhc889m40nss@group.calendar.google.com

export default class Calendar extends React.Component
{
      render()
      {
          return(
              <Layout>
                  <MyCal/> 
            </Layout>
          )
      }
}