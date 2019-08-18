import React from 'react';
import timeFormatter from '../helpers/timeFormatter'
import EventList from './eventList';
import storage from '../storage/storage'

//de2aikh7oknjsbhhc889m40nss@group.calendar.google.com
//fouracesquartet@gmail.com
const refString = "href=\"";
const smallerThan = "<";
const greaterThan = ">";
const quotes = '\"'

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

        var eventData = [];
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
        request.execute(function (resp) {
            for (var i = 0; i < resp.items.length; i++) {

                var item = resp.items[i];

                var linkText = item.description;
                var link = item.description;

                if(item.description !== undefined)
                {
                    if(link.indexOf(refString) === -1){
                        link = null;
                    } else {
                        link = link.split(refString)[1];
                        link = link.split(quotes)[0];

                        linkText = linkText.split(greaterThan)[1];
                        linkText = linkText.split(smallerThan)[0];
                    }
                }
                var date = item.start;

                if(date !== undefined)
                {
                    date = timeFormatter(item);
                }
                eventData[i] = 
                    [item.summary, date, link, linkText, item.location];
            }
            storage.calStorage.setData(eventData);
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
