// Import stylesheets
import "./style.css";

console.log = (...arg: any[]) => {
  const appDiv: HTMLElement = document.getElementById("app");
  appDiv.innerHTML += `<div>${arg.toString()}</div>`;
};

console.log("Hello", "World");
console.log("Breaker");
