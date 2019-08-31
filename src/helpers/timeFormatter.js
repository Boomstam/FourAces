const dateTimeSeparator = '-';

export default function timeFormatter(item)
{
    var allDay = item.start.date? true : false;
    var startDT = allDay ? item.start.date : item.start.dateTime;
    var dateTime = startDT.split("T"); //split date from time
    var date = dateTime[0].split(dateTimeSeparator); //split yyyy mm dd

    date = date.reverse();
    date = date.join(dateTimeSeparator);
    /*var startYear = date[0];
    var startMonth = monthString(date[1]);
    var startDay = date[2];
    var startDateISO = new Date(startMonth + " " + startDay + ", " + startYear + " 00:00:00");
    var startDayWeek = dayString(startDateISO.getDay());*/

    var time = dateTime[1].split(":"); //split hh ss etc...
    var startHour = time[0];
    var startMin = time[1];
    var hour = startHour + "u" + startMin;
    
    //date.push(hour);
    //console.log("Date_" + date);
    //console.log("startDT_" + startDT);

    var dateString = date + " - " + hour;

    return dateString;
}

function padNum(num) {
    if (num <= 9) {
        return "0" + num;
    }
    return num;
}
//--------------------- end    
    
//--------------------- From 24h to Am/Pm
function AmPm(num) {
    if (num <= 12) { return num + " am"; }
    return padNum(num - 12) + " pm";
}
//--------------------- end    

//--------------------- num Month to String
function monthString(num) {
         if (num === "01") { return "JAN"; } 
    else if (num === "02") { return "FEB"; } 
    else if (num === "03") { return "MAR"; } 
    else if (num === "04") { return "APR"; } 
    else if (num === "05") { return "MEI"; } 
    else if (num === "06") { return "JUN"; } 
    else if (num === "07") { return "JUL"; } 
    else if (num === "08") { return "AUG"; } 
    else if (num === "09") { return "SEP"; } 
    else if (num === "10") { return "OCT"; } 
    else if (num === "11") { return "NOV"; } 
    else if (num === "12") { return "DEC"; }
}
//--------------------- end

//--------------------- from num to day of week
function dayString(num){
         if (num == "1") { return "mon" }
    else if (num == "2") { return "tue" }
    else if (num == "3") { return "wed" }
    else if (num == "4") { return "thu" }
    else if (num == "5") { return "fri" }
    else if (num == "6") { return "sat" }
    else if (num == "0") { return "sun" }
}
