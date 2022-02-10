import React, { useState } from 'react';

const AddLogModel = () => {
  const [message, setMessage] = useState('');
  const [staff, setStaff] = useState('');

  const handleSelect = (e) => {
    setStaff(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newLogs = {
      message,
      tech: staff,
      date: new Date(),
    };
    fetch('http://localhost:5001/logs', {
      method: 'POST',
      body: JSON.stringify(newLogs),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    window.location.reload();
  };

  return (
    <div
      id='log-add-modal'
      className='modal'
      style={{ width: '75%', height: '75%' }}>
      <div className='modal-content'>
        <h4>Enter Syatem Logs </h4>
        <div className='row'>
          <div className='input-fields'>
            <input
              name='message'
              type='text'
              message='message'
              value={message}
              placeholder='Type your message'
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className='row'>
              <div className='input-fields'>
                <select className='' value={staff} onChange={handleSelect}>
                  <option value='' disabled>
                    Select Staff
                  </option>
                  <option value='Pubudu'>Pubudu</option>
                  <option value='Dureksha'>Dureksha</option>
                </select>
              </div>
            </div>

            <div className='modal-footer'>
              <a
                href='#!'
                className='modal-close waves-effect blue waves-light btn'
                onClick={onSubmit}>
                Add Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLogModel;
