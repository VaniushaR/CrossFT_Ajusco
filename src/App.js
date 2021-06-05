import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//moment.js
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
//components
import { NavigationBar } from './NavBar';
import { Home } from './Home';

const localizer = momentLocalizer(moment);

const fullPaymentDays = [
  {
    events: [
      {
        start: moment().toDate(),
        end: moment()
          .add(0, 'days')
          .toDate(),
        title: 'Mary'
      },
      {
        start: moment().toDate(),
        end: moment()
          .add(0, 'days')
          .toDate(),
        title: 'Ale'
      },
      {
        start: moment().toDate(),
        end: moment()
          .add(0, 'days')
          .toDate(),
        title: 'Rodolfo'
      }
    ]
  }
];

let paymentDays;
//can I add a parameter here if comming from DB
const eventsIterator = () => {
  for (const events of fullPaymentDays) {
    console.log(events.events);
    paymentDays = events.events;
  }
  return paymentDays;
};

const viewPayment = event => {
  alert(event.title, 'Set up payment');
  //modal form with data
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Home />

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <Calendar
          selectable
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={eventsIterator()}
          style={{ height: '100vh' }}
          onSelectEvent={event => viewPayment(event)}
        />
      </div>
    );
  }
}

export default App;
