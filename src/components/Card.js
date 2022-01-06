import "./Card.css";

function Card(props) {
  const cln = "card " + props.className;
  return <div className={cln}>{props.children}</div>;
}

export default Card;
