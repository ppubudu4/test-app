import React, { useEffect, useState, useRef } from 'react';
import LogsItem from './LogsItem';

const Logs = () => {
  const [logs, setLogs] = useState([]);

  const ref = useRef(null);
  const ref2 = useRef(null);

  const fetchLogs = async () => {
    const res = await fetch('http://localhost:5001/logs');
    const data = await res.json();

    setLogs(data);
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <ul className='collection with-header'>
      <li ref={ref} className='collection-header'>
        <h4 ref={ref} className='center'>
          System Logs
        </h4>
      </li>
      {logs?.map((item, index) => {
        return (
          <LogsItem
            key={index}
            id={item.id}
            name={item.tech}
            message={item.message}
          />
        );
      })}
    </ul>
  );
};

export default Logs;
