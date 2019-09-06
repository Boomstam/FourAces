import React from 'react';
import { navigate } from "gatsby";

const home = '/';

function handleLoad(){

    navigate(home);
}

export default class About extends React.Component {
    
    componentDidMount(){

        navigate(home);
    }

    render(){

        return(
            <div/>
        )// onLoad={handleLoad()}
    }
}