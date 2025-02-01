import { useState } from "react";
import Btn from "./Btn";

export default function Accordion() {
  return (
    <div className="acc-container">
      <div className="acc-head">
        <h2>Title</h2>
        <Btn type="primary">+</Btn>
      </div>
      <div className="acc-body">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum odio
          dolores iste ad volupta
        </p>
      </div>
    </div>
  );
}
