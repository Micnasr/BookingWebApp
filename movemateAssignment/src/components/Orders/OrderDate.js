import './OrderDate.css'

const OrderDate = (props) => {
  //Splits the date object's data into strings
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className='order-date'>
      <div className='order-date__month'>{month}</div>
      <div className='order-date__year'>{year}</div>
      <div className='order-date__day'>{day}</div>
    </div>
  );
}

export default OrderDate;
