import React, { useState } from "react";

import Orders from "./components/Orders/Orders";
import NewOrder from "./components/NewOrder/NewOrder";
import "./index.css";
import Card from "./components/UI/Card";

const App = () => {
  //Array with all the orders and data
  const [orders, setOrders] = useState([]);

  //Adds new order to the array
  const addOrderHandler = (order) => {
    setOrders((prevOrders) => {
      return [order, ...prevOrders];
    });
  };

  /*
  "New Order" Component will keep track of the UI that let's you input and submit information 
  "Orders Component" will keep track of all current orders and render them
  */
  return (
    <div>
      <Card className='title' >
        <h3>MoveMate Demo, Made by Michael Nasr</h3>
      </Card>
      
      <NewOrder onAddOrder={addOrderHandler} />
      <Orders items={orders} />
    </div>
  );
};

export default App;
