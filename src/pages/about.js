import React from 'react';
import { navigate } from "gatsby";

const home = '/';

function handleLoad(){

    navigate(home);
}

export default class About extends React.Component {


    render(){

        return(
            <div onLoad={handleLoad()}/>
        )
    }
}