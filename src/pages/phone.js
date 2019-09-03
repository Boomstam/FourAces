import { navigate } from "gatsby";
import React from 'react';

const home = '/';

function handleLoad(){

    navigate(home);
}

export default class Phone extends React.Component {

    render(){

        return(
            <div onLoad={handleLoad()}/>
        )
    }
}