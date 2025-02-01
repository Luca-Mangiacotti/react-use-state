import Btn from "./Btn";

export default function Accordion({ id, title, description }) {
  return (
    <div className="acc-container">
      <div className="acc-head">
        <h2>{title}</h2>
        <Btn type="primary">+</Btn>
      </div>
      <div className="acc-body">
        <p>{description}</p>
      </div>
    </div>
  );
}
