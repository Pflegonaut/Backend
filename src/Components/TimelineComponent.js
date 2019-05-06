import React from "react";
import { Timeline, TimelineEvent } from "react-event-timeline";
import moment from "moment";

const TimelineComponent = props => {
  return (
    <>
      <h3 className="mt-2">Timeline</h3>
      <Timeline>
        <TimelineEvent
          title={`Erstellt durch ${props.authorFirstName} ${
            props.authorLastName
          } `}
          createdAt={moment(props.createdAt.toDate()).format("Do MMMM YYYY")}
        />
        <TimelineEvent
          title={`Updated durch ${props.authorFirstName} ${
            props.authorLastName
          } `}
          createdAt={moment(props.createdAt.toDate()).format("Do MMMM YYYY")}
        />
      </Timeline>
    </>
  );
};

export default TimelineComponent;
