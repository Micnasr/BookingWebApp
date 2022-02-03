import React, { useState } from "react";

import "./NewOrder.css";
import OrderForm from "./OrderForm";

const NewOrder = (props) => {
  //Tracks if the order form is being used or not
  const [isEditing, setIsEditing] = useState(false);

  //Passes in the order data to a higher (parent of this child) component
  const saveOrderDataHandler = (enteredOrderData) => {
    const OrderData = {
      ...enteredOrderData,
      /*create a unique id to each order (I know it's not 100% 
      unique since theres a tiny chance you can get the same number but for the scope of 
      the project I decided to go with this method) */
      id: Math.random().toString(),
    };
    props.onAddOrder(OrderData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-order">
      {
        //If no one is editing the form, show the "Add New Order" button (Close Form)
        !isEditing && (
          <button onClick={startEditingHandler}>Add New Order</button>
        )
      }
      {
        //If the "Add New Order" button is pressed, we want to reveal the form
        isEditing && (
          <OrderForm
            onSaveOrderData={saveOrderDataHandler}
            onCancel={stopEditingHandler}
          />
        )
      }
    </div>
  );
};

export default NewOrder;
