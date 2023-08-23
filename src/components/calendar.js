import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./calendar.css";
// import '@mobiscroll/react/dist/css/mobiscroll.min.css';
// import { Page, Eventcalendar, getJson, Toast, localeEnGB } from '@mobiscroll/react';

// function MyCalendar(){
//   const [myEvents, setEvents] = React.useState([]);
//   const [isToastOpen, setToastOpen] = React.useState(false);
//   const [toastText, setToastText] = React.useState();

//   React.useEffect(() => {
//       getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
//           setEvents(events);
//           console.log(events)
//       }, 'jsonp');
//   }, []);
  
//   const closeToast = React.useCallback(() => {
//       setToastOpen(false);
//   }, []); 
  
//   const onEventClick = React.useCallback((event) => {
//       setToastText(event.event.title);
//       setToastOpen(true);
//   }, []);
  
//   const view = React.useMemo(() => {
//       return {
//           calendar: { labels: true }
//       };
//   }, []);

//   return <Page>
//       <Eventcalendar
//           locale={localeEnGB}
//           theme="windows" 
//           themeVariant="light"
//           clickToCreate={false}
//           dragToCreate={false}
//           dragToMove={false}
//           dragToResize={false}
//           eventDelete={false}
//           data={myEvents}
//           view={view}
//           onEventClick={onEventClick}
//      />
//       <Toast 
//       message={toastText}
//       isOpen={isToastOpen}
//           onClose={closeToast}
//     />
//   </Page>
// }


function MyCalendar({values}) {
  const [eventDates, setEventDates] = useState([values[0], values[values?.length - 1]]);
  const tileContent = ({ date }) => {
    if (eventDates.find(eventDate => eventDate.toDateString() === date.toDateString())) {
      return <div className="event-tile"></div>; // You can style this div as you like
    }
    return null;
  };

  return (
    <div className="calendar-container">
      <Calendar value={eventDates}  tileContent={tileContent} />
    </div>
  );
}

export default MyCalendar;
