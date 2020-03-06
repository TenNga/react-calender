import React from 'react';
import { Scheduler, DayView, Appointments } from '@devexpress/dx-react-scheduler-material-ui';
import { ViewState } from '@devexpress/dx-react-scheduler';

import './App.css';

function App() {
  return (
    <div className="App">
      <Scheduler
    data={[
      { startDate: '2018-10-31 10:00', endDate: '2018-10-31 11:00', title: 'Meeting', location: "NEW YORK"},
      { startDate: '2018-10-31 10:00', endDate: '2018-10-31 11:30', title: 'Stand up'},
      { startDate: '2018-10-31 18:00', endDate: '2018-10-31 19:30', title: 'Go to a gym' },
    ]}
  >
    <ViewState
        currentDate={"2018-10-31"}
      />
    <DayView startDayHour= {10} endDayHour={20}/>
    <Appointments />
  </Scheduler>
    </div>
  );
}

export default App;
