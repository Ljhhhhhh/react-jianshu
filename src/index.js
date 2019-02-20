import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyle } from "./style.js";
import { GlobalFontIcon } from "./statics/iconfont/iconfont";
import App from "./App";
const ABC = (
  <div>
    <GlobalStyle />
    <GlobalFontIcon />
    <App />
  </div>
);
ReactDOM.render(ABC, document.getElementById("root"));
