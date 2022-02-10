import React from 'react';

const SampleItem = ({ message, staffName, id }) => {
  return (
    <div
      style={{
        border: '1px solid #000',
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
      }}>
      <span className='blue-text'>{message}</span>

      <span className='collection-item'>{staffName}</span>
    </div>
  );
};

export default SampleItem;
