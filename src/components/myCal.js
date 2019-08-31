import React, { Component } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CalendarLoader from './calendarLoader';

class MyCal extends Component {
  
  render() {
    
    return (
      <div>
        <CalendarLoader/>
        </div>
    );
  }
}

export default MyCal;