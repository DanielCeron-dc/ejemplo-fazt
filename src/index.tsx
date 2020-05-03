import * as React from "react";
import * as ReactDOM from "react-dom";
import "./styles/main.scss";

import { App } from "./components/app";

const app = document.getElementById("app");
ReactDOM.render(<App title='React TS' />, app);
