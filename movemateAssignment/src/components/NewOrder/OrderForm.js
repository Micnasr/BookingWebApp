import React, { useState } from "react";

import "./OrderForm.css";

const OrderForm = (props) => {
  
  //States for all 3 variables
  const [enteredTime, setEnteredTime] = useState("1 am");
  const [enteredHours, setEnteredHours] = useState(1);
  const [enteredDate, setEnteredDate] = useState("");

  const timeChangeHandler = (event) => {
    setEnteredTime(event.target.value);
  };

  const hoursChangeHandler = (event) => {
    setEnteredHours(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  //If data is submitted we want to store it
  const submitHandler = (event) => {
    event.preventDefault();

    const orderData = {
      time: enteredTime,
      hours: enteredHours,
      date: new Date(enteredDate),
    };

    //Reset the Input Values when Submitted
    props.onSaveOrderData(orderData);
    setEnteredTime("");
    setEnteredHours("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-order__controls">
        <div className="new_order__control">
          {/*Input for the Order Time */}
          <label>Starting Time </label>
          <select value={enteredTime} onChange={timeChangeHandler}>
            <option value="1am">1 am</option>
            <option value="2am">2 am</option>
            <option value="3am">3 am</option>
            <option value="4am">4 am</option>
            <option value="5am">5 am</option>
            <option value="6am">6 am</option>
            <option value="7am">7 am</option>
            <option value="8am">8 am</option>
            <option value="9am">9 am</option>
            <option value="10am">10 am</option>
            <option value="11am">11 am</option>
            <option value="12pm">12 pm</option>
            <option value="1pm">1 pm</option>
            <option value="2pm">2 pm</option>
            <option value="3pm">3 pm</option>
            <option value="4pm">4 pm</option>
            <option value="5pm">5 pm</option>
            <option value="6pm">6 pm</option>
            <option value="7pm">7 pm</option>
            <option value="8pm">8 pm</option>
            <option value="9pm">9 pm</option>
            <option value="10pm">10 pm</option>
            <option value="11pm">11 pm</option>
            <option value="12am">12 am</option>
          </select>
        </div>
        <div className="new_order__control">
          {/*Input for the total time */}
          <label>Total Hours </label>
          <input
            type="number"
            min="1"
            max="24"
            step="1"
            value={enteredHours}
            onChange={hoursChangeHandler}
          />
        </div>
        <div className="new_order__control">
          {/*Input for the Order date */}
          <label>Date </label>
          <input
            type="date"
            min="2022-02-15"
            max="2025-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-order__actions">
        {/*Cancel button to remove form */}
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        {/*Button to submit data and add a new order */}
        <button type="submit">Add Order</button>
      </div>
    </form>
  );
};

export default OrderForm;
