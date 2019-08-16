import React from 'react'
import Calendar from 'react_google_calendar'

const calendar_configuration = {
    api_key: "testapi-1564598487075",
    calendars: [
      {
        name: 'TestKwartet',
        url: 'srg23q1tm95o05u36lec0ilkt4@group.calendar.google.com'
      }
    ],
    dailyRecurrence: 700,
    weeklyRecurrence: 500,
    monthlyRecurrence: 20
}

export default class MyApp extends React.Component {
    constructor(props) {
      super(props)
        this.state = {
          events: []
        }
    }

    /*componentDidMount()
    {
        console.log(JSON.stringify(this.state.events));
    }*/

    render = () =>
      <div>
        <Calendar
          events={this.state.events}
          config={calendar_configuration} />
      </div>
}