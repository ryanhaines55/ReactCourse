import './ExpensesFilter.css';

import React from 'react';

const ExpensesFilter = (props) => {

  // Handle the select onChange event
  const onChangeHandler = event => {

    // Call the event passed by the props object with the event object value
    props.onFilterChange(event.target.value);

  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={onChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;