import React, { useState } from "react";

import Card from "../UI/Card";
import "./Orders.css";
import OrdersFilter from "./OrdersFilter";
import OrdersList from './OrdersList';

const Orders = (props) => {
  //Sets the filtered Year by Default to 2022
  const [filteredYear, setFilteredYear] = useState("2022");

  //Changes the filter year depending on what was selected
  const filterChangeHander = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //In charge of storing all the orders that match the filteredYear 
  const filteredOrders = props.items.filter((order) => {
    return order.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="orders">
        <OrdersFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHander}
        />
        <OrdersList items={filteredOrders}/>
      </Card>
    </div>
  );
};

export default Orders;
