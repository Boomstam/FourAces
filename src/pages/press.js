import React from 'react';
import Layout from '../components/layout';
import ReviewLinks from '../components/reviewLinks';
import ZoomBgImg from '../components/zoomBgImg';

const imgName = "Press.png";
const style = { width: "100vw", transform:"translateY(-40vh)" };

export default class Press extends React.Component {
    render()
    {
        return(
            <Layout>
                <ReviewLinks/>
                <ZoomBgImg 
                    imgName={imgName}
                    customStyle={style}/>
            </Layout>
            )
    }
}