import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import { rhythm } from "../utils/typography";
import Layout from "./layout";
import styled from 'styled-components';
import "react-big-calendar/lib/css/react-big-calendar.css";
import CalendarLoader from './calendarLoader';

class MyCal extends Component {
  
  render() {
    return (
      <div>
        <Layout>
        <CalendarLoader/>
      </Layout>
        </div>
    );
  }
}

export default MyCal;

      /*<Container>
      <TockifyWrap/>
      </Container>

const Container = styled.div`

  width: 80vw;
  margin: 20vh 10vw 10vh 10vw;
`*/