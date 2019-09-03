import { Link } from 'gatsby';
import React from 'react';

const home = '/';

export default class Phone extends React.Component {

    render(){

        return(
            <Link to={home}/>
        )
    }
}