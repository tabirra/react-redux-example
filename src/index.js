import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import Root from "./components/Root";
import "./index.css";

/**
 * Index where the game is rendered
 */
render(<Root />, document.getElementById("root"));
