import timeFormatter from '../helpers/timeFormatter';
import storage from '../storage/storage';

const refString = "href=\"";
const smallerThan = "<";
const greaterThan = ">";
const quotes = '\"';

const adressSeparator = ',';
const citySeparator = ' ';
const hourSeparator = " - ";

export default function eventLoader(rawDataColl)
{
    //console.log("rawData_" + JSON.stringify(rawDataColl));

    let eventData = [];
    
    for (var i = 0; i < rawDataColl.items.length; i++) {
        
        let rawData = rawDataColl.items[i];
        
        let { link, linkText } = getLinkData(rawData);
        
        let timeStamp = getTimeStamp(rawData);
        let date = getDate(rawData);
        let hour = getTime(rawData);

        let city = getCity(rawData);
        
        let dataColl = { 
            venue: rawData.summary,
            timeStamp: timeStamp,
            date: date,
            hour: hour,
            link: link,
            linkText: linkText,
            location: rawData.location,
            city: city,
        };
        eventData[i] = dataColl;
    }
    storage.calStorage.setData(eventData);
}

function getCity(rawData){

    let city = rawData.location;
    
    if(city !== undefined)
    {
        let locationColl = rawData.location.split(adressSeparator);
        
            let rawCityIndex = locationColl.length - 2;

            let rawCity = locationColl[rawCityIndex];
         
            if(rawCity !== null && rawCity !== undefined)
            {
                let cityColl = rawCity.split(citySeparator);

                if(cityColl !== null && cityColl !== undefined)
                {
                let length = cityColl.length - 2;
    
                city = cityColl.splice(2, length);
                }
            }
    }
    return city;
}

function getDate(rawData){

    let timeStamp = getTimeStamp(rawData);

    let date = timeStamp.split(hourSeparator)[0];

    return date;
}

function getTime(rawData){

    let timeStamp = getTimeStamp(rawData);

    let time = timeStamp.split(hourSeparator)[1];

    return time;
}

function getLinkData(rawData) {
    
    let linkText = rawData.description;
    let link = rawData.description;
    
    if (rawData.description !== undefined) {

        if (link.indexOf(refString) === -1) {
            
            link = null;
        }
        else {

            link = link.split(refString)[1];
            link = link.split(quotes)[0];

            linkText = linkText.split(greaterThan)[1];
            linkText = linkText.split(smallerThan)[0];
        }
    }
    return { link, linkText };
}

function getTimeStamp(rawData) {

    let date = rawData.start;

    if (date !== undefined) {

        date = timeFormatter(rawData);
    }
    return date;
}