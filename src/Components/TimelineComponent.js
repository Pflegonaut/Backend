import React from 'react';
import { Timeline, TimelineEvent } from 'react-event-timeline';
import moment from 'moment';

const TimelineComponent = ({ authorFirstName, authorLastName, createdAt }) => (
  <>
    <h3 className="mt-2">Timeline</h3>
    <Timeline>
      <TimelineEvent
        title={`Erstellt durch ${authorFirstName} ${
          authorLastName
        } `}
        createdAt={moment(createdAt.toDate()).format('Do MMMM YYYY')}
      />
      <TimelineEvent
        title={`Updated durch ${authorFirstName} ${
          authorLastName
        } `}
        createdAt={moment(createdAt.toDate()).format('Do MMMM YYYY')}
      />
    </Timeline>
  </>
);

export default TimelineComponent;
