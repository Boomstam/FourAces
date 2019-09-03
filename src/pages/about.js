import { Link } from 'gatsby';
import React from 'react';

const home = '/';

export default class About extends React.Component {

    render(){

        return(
            <Link to={home}/>
        )
    }
}