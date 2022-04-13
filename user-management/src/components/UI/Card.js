import styles from './Card.module.css';

const Card = (props) => {
  const className = styles.Card + ' ' + (props.className || '');
  return <div onClick={props.onClick}  className={className}>{props.children}</div>;
};

export default Card;
