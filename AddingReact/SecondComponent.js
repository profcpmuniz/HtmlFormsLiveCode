import { MyComponent } from "./MyComponent.js";

export var SecondComponent = function SecondComponent() {
  return React.createElement(
    "div",
    null,
    "SecondComponent",
    React.createElement(MyComponent, null)
  );
};