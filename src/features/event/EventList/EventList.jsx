import React, { Component } from "react";
import EventListItem from "../EventList/EventListItem";

class EventList extends Component {
  render() {
    // dapetin data dari EventDashboard
    const { events, onEventOpen, deleteEvent } = this.props;
    return (
      <div>
        <h1>Event List</h1>
        {/* array mapping */}
        {events.map(event => (
          <EventListItem
            key={event.id}
            event={event}
            onEventOpen={onEventOpen}
            deleteEvent={deleteEvent}
          />
        ))}
      </div>
    );
  }
}

export default EventList;
