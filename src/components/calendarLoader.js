import React from 'react';
import eventFormatter from '../helpers/eventFormatter';
import EventList from './eventList';
import storage from '../storage/storage';

//de2aikh7oknjsbhhc889m40nss@group.calendar.google.com
//AIzaSyC2S8UU-9iVZkxSgjrzA_fAeChSBMjEgKU
//fouracesquartet@gmail.com

export default class CalendarLoader extends React.Component
{
    constructor(props)
    {
        super(props);
        
        this.setState({ loaded: false });
    }

    setLoaded()
    {
        this.setState({ loaded: true });
    }

    componentDidMount() {
        this.loadGoogleAPI();
      }
  
      loadGoogleAPI() {

        if(typeof document !== 'undefined')
        {
        const script = document.createElement("script");
        script.src = "https://apis.google.com/js/client.js";
  
        script.onload = () => {
          window.gapi.load("client", () => {
            window.gapi.client.setApiKey("AIzaSyC2S8UU-9iVZkxSgjrzA_fAeChSBMjEgKU");
            window.gapi.client.load("calendar", "v3", () => {
                this.makeApiCall();
            });
          });
        };
        document.body.appendChild(script);
        }   
      }

       makeApiCall() {

        var today = new Date(); //today date
        storage.calStorage.setCallback(this.setLoaded.bind(this));

        window.gapi.client.load('calendar', 'v3', function () {
            var request = window.gapi.client.calendar.events.list({
                'calendarId' :"fouracesquartet@gmail.com",
                'timeZone' : "Rome", 
                'singleEvents': true, 
                'timeMin': today.toISOString(), //gathers only events not happened yet
                'maxResults': 10, 
                'orderBy': 'startTime'});
        request.execute(function (rawData) {
            eventFormatter(rawData);
            });
        });
    }

      render()
      {
          if(this.state === null)
          {
              return(<div/>)
            }
            if(this.state.loaded === false)
          {
              return(<div/>)
            }
          return(<EventList/>)
      }
}


//AUTHORISATION CODE
    //--------------------- end
    /*
    //--------------------- client CALL
    handleClientLoad() {
        window.gapi.client.setApiKey(apiKey);
        checkAuth();
    }
    //--------------------- end
    
    //--------------------- check Auth
    checkAuth() {
        window.gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true}, handleAuthResult);
    }
    //--------------------- end
    
    //--------------------- handle result and make CALL
    handleAuthResult(authResult) {
        if (authResult) {
            makeApiCall();
        }
    }*/
