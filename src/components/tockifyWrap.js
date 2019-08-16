import React, { Component } from "react";
import Calendar from "react-big-calendar";
import moment from "moment";
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import styled from 'styled-components'
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = Calendar.momentLocalizer(moment);

class TockifyWrap extends Component {
  
    componentDidMount() {
      const script = document.createElement('script');

      script.setAttribute(
        'src', 
        'https://public.tockify.com/browser/embed.js');

      script.addEventListener('load', () => {
      });

      document.body.appendChild(script);
    }

  render() {
    return (
      <StyledCal data-tockify-component="mini" data-tockify-calendar="foraces"/>
    );
  }
}

export default TockifyWrap;

const StyledCal = styled.div`

width: 50vw;
`
