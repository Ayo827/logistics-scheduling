import React, { useState } from 'react';
import CalendarEvent from './calendar';

const generateSampleEvents = () => {
  const now = new Date().getTime();
  const events = [
    {
      title: 'Meeting 1',
      startTime: now + 2 * 3600 * 1000, // 2 hours from now
      endTime: now + 3 * 3600 * 1000, // 3 hours from now
    },
    // Add more sample events here
  ];
  return events;
};

const Calendar = () => {
  const [view, setView] = useState('day'); // 'day', 'week', 'month'
  const events = generateSampleEvents();

  return (
    <div className="calendar">
      <div className="view-switch">
        <button onClick={() => setView('day')}>Day View</button>
        <button onClick={() => setView('week')}>Week View</button>
        <button onClick={() => setView('month')}>Month View</button>
      </div>
      <div className="event-list">
        {events.map((event, index) => (
          <CalendarEvent key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
