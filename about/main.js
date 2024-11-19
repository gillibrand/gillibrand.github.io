import { setupCounter } from "./counter.js";
import "./style.css";

console.log("working");

document.querySelector("#app").innerHTML = `
  <div>
    This is about me
  </div>
`;

setupCounter(document.querySelector("#counter"));
