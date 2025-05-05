import React, { useState } from 'react';
import './App.css';
import CalendarMain from './components/CalendarMain/CalendarMain.jsx';
import DateBlock from './components/DateBlock/DateBlock.jsx';
import Btn from './components/DateBtn/Btn.jsx';
import NotesMain from './components/NotesMain/NotesMain.jsx';

function App() {
  const [date, setDate] = useState(new Date());
  const [deal, setDeal] = useState([]);

  return (
    <div id='wrapper'>
      <div className='backBtn'>
        <a href="#"></a>
      </div>
      <div className='header'>
        <Btn arrow={'<< '} date={date} setDate={setDate} />
        <DateBlock date={date} />
        <Btn arrow={' >>'} date={date} setDate={setDate} />
      </div>
      <CalendarMain date={date} deal={deal} setDeal={setDeal} />
      <NotesMain deal={deal} setDeal={setDeal} />
    </div>
  );
}

export default App;
