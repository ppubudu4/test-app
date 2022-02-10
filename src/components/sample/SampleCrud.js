import React, { Fragment, useState } from 'react';
import SampleItem from './SampleItem';
import M from 'materialize-css/dist/js/materialize.min';

const SampleCrud = () => {
  const [list, setList] = useState([
    {
      message: 'System Update',
      staffName: 'Pubudu',
    },
  ]);

  const [obj, setobj] = useState({
    message: '',
    staffName: '',
  });
  const handleOnChange = (e) => {
    setobj({ ...obj, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (obj.message === '' || obj.staffName === '')
      return M.toast({ html: 'Please Fill Relavent Fields' });

    setList((oldArry) => [...oldArry, obj]);
    setobj({ message: '', staffName: '' });
  };
  return (
    <div>
      <h2 className='center'>Sample List</h2>
      {list.map((item, index) => {
        return (
          <SampleItem
            key={index}
            message={item.message}
            staffName={item.staffName}
          />
        );
      })}
      <div style={{ marginTop: '30px' }}>
        <from>
          <input
            name='message'
            type='text'
            value={obj.message}
            placeholder='Add message here'
            onChange={handleOnChange}
          />
          <select
            name='staffName'
            value={obj.staffName}
            onChange={handleOnChange}>
            <option value=''>Select Staff</option>
            <option value='Pubudu Dananjaya'>Pubudu Dananjaya</option>
            <option value='Dureksha'>Dureksha</option>
          </select>
          <button className='btn blue' onClick={onSubmit}>
            Add Message
          </button>
        </from>
      </div>
    </div>
  );
};

export default SampleCrud;
