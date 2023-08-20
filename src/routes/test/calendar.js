import React from 'react';

const CalendarEvent = ({ event }) => {
  const { title, startTime, endTime } = event;
  const duration = (endTime - startTime) / 60; // in minutes

  return (
    <div className="event">
      <strong>{title}</strong>
      <p>
        {new Date(startTime).toLocaleTimeString()} -{' '}
        {new Date(endTime).toLocaleTimeString()} ({duration} mins)
      </p>
    </div>
  );
};

export default CalendarEvent;
