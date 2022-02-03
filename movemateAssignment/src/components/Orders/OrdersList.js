import React from "react";
import OrderItem from "./OrderItem";
import "./OrdersList.css";

const OrdersList = (props) => {

  //If there are no orders, we display a message on the screen
  if (props.items.length === 0) {
    return <h2 className="orders-list__fallback">Found no orders</h2>;
  }

  return (
    <ul className="orders-list">
      {props.items.map((order) => (
        <OrderItem
          key={order.id}
          time={order.time}
          hours={order.hours}
          date={order.date}
        />
      ))}
    </ul>
  );
};

export default OrdersList;
