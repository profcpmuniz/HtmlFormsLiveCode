import { SecondComponent } from "./SecondComponent.js";
const domContainer = document.querySelector('#react_container');
const root = ReactDOM.createRoot(domContainer);
root.render(SecondComponent());
//to transform JSX to production JS code: run the command.  npx babel --watch src --out-dir . --presets react-app/prod