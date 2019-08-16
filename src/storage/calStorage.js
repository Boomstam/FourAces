var events = [];
var callback = undefined;

export default class CalStorage {

    setCallback(func)
    {
        callback = func;
    }

    setData(eventData)
    {
        events = eventData;

        callback.call();
    }

    getEvents()
    {
        return events;
    }
}