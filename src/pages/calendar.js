import React from 'react';
import Layout from '../components/layout';
import MyCal from '../components/myCal';
import ZoomBgImg from '../components/zoomBgImg';

const imgName = "Concerts.png";
const style = { width: "100vw", transform:"translateY(-40vh)" };
//de2aikh7oknjsbhhc889m40nss@group.calendar.google.com

export default class Calendar extends React.Component
{
      render()
      {
          return(
              <Layout>
                  <MyCal/> 
                  <ZoomBgImg 
                    imgName={imgName}
                    customStyle={style}/>
            </Layout>
          )
      }
}