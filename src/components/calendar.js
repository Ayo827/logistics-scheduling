import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./calendar.css"

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
