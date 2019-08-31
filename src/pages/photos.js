import React from 'react';
import Layout from '../components/layout';
import ShootLightBox from '../components/shootLightBox';
import ZoomBgImg from '../components/zoomBgImg'

const bgImgName = "Tree.jpg";
const style = { transform: "translateY(-50vh)" };

export default class Photo extends React.Component
{
    render()
    {
        return(
            <Layout>
                <ZoomBgImg 
                    imgName={bgImgName}
                    customStyle={style}/>
                <ShootLightBox/>
            </Layout>
            )
    }
}