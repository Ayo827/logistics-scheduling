import React, {useState, useCallback, useMemo, useEffect} from 'react'; 
import "./progress.css";
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Page, Eventcalendar, Toast, localeEnGB } from '@mobiscroll/react';


export default function Progress({data}){
  const [myEvents, setEvents] = useState([]);
  const [isToastOpen, setToastOpen] = useState(false);
  const [toastText, setToastText] = useState();

useEffect(() => {
    setEvents(data);
  }, []);
  
  const closeToast = useCallback(() => {
      setToastOpen(false);
  }, []); 
  
  const onEventClick = useCallback((event) => {
      setToastText(event.event.title);
      setToastOpen(true);
  }, []);
  
  const view = useMemo(() => {
      return {
          calendar: { labels: true }
      };
  }, []);

  return <Page>
      <Eventcalendar
          locale={localeEnGB}
          theme="windows" 
          themeVariant="light"
          clickToCreate={false}
          dragToCreate={false}
          dragToMove={false}
          dragToResize={false}
          eventDelete={false}
          data={myEvents}
          view={view}
          onEventClick={onEventClick}
     />
      <Toast 
      message={toastText}
      isOpen={isToastOpen}
          onClose={closeToast}
    />
  </Page>
}