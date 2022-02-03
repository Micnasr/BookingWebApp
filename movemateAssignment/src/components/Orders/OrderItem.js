import React from "react";

import OrderDate from "./OrderDate";
import Card from "../UI/Card";
import "./OrderItem.css";

const OrderItem = (props) => {
  
  let dayOfWeek = props.date.getDay();
  let isWeekend = false;

  //Determines if it's a weekend or not
  if (dayOfWeek === 5 || dayOfWeek === 6){
    isWeekend = true;
  }

  let cost;

  //Calculates Cost 
  if (isWeekend){
    cost = (props.hours * 150);
  } else {
    cost = (props.hours * 100);
  } 
  
  return (
    <li>
      <Card className="order-item">
        <OrderDate date={props.date} />
        <div className="order-item__description">
          <h2>{'Order Time: ' + props.time + ' (' + props.hours + ' hours)'}</h2>
          <div className="order-item__price">{"$" + cost}</div>
        </div>
      </Card>
    </li>
  );
};

export default OrderItem;
