import React, { Component } from "react";
import Calendar from "react-big-calendar";
import moment from "moment";
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import styled from 'styled-components'
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = Calendar.momentLocalizer(moment);

class MyCal extends Component {
  state = {
    events: [
      {
        start: new Date("2019-02-02"),
        end: new Date("2019-02-02"),
        title: "Kasteel Stabroek"
      }
    ]
  };

  render() {
    return (
    
      <Layout>
      <MyCalGrid>
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          views={['month']}
          defaultView="month"
          events={this.state.events}
          style = {{ height: "40vh", width: "50vw", display:"block", margin:"auto" }}
        />
        <div style={{ height: "15vh" }}>
        </div>
        <div style = {{ height: "40vh", width: "50vw", display:"block", margin:"auto" }}>
          <p>Waar</p>
          <p>Wanneer</p>
          <p><Link>Link naar tickets.</Link></p>
          <p><Link>Link naar de locatie.</Link></p>
        </div>
      </MyCalGrid>
      </Layout>
    );
  }
}

export default MyCal;

const MyCalGrid = styled.div`
  color: purple;
  text-align:center;
`