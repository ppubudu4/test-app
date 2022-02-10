import { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModel from './components/logs/AddLogModel';
import SampleCrud from './components/sample/SampleCrud';

function App() {
  useEffect(() => {
    // Init Materialize
    M.AutoInit();
  });
  return (
    <div className='container'>
      <AddBtn />
      <AddLogModel />
      <Logs />
      <SampleCrud />
    </div>
  );
}

export default App;
