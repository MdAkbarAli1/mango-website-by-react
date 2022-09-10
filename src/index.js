import ReactDOM from "react-dom";
import "./index.css";
import App1 from "./subcom/App";
// import Cmpt from "./subcom/cmpt";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(<BrowserRouter><App1 /></BrowserRouter>, document.getElementById("root"));
