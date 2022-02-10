import React from 'react';

const LogsItem = ({ id, name, message }) => {
  return (
    <li className='collection-item'>
      <div>
        <a className='blue-text'>{message}</a>
        <br />
        <span className='grey-text'>
          <span className='black-text'> ID {id}</span> last updated by
          <span className='black-text'> {name}</span> 2022/2/10
        </span>
        <a href='#' className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

export default LogsItem;
