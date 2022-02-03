import './Card.css';

//This component is to give all cards the same look / design
const Card = (props) => {
    const classes = 'card ' + props.className;
    
    return (
        <div className={classes}>{props.children}</div>
    );
}

export default Card;