import React from "react";
import { createRoot } from 'react-dom/client';

import App from "./App";
import "./index.css";


const rootEl = document.getElementById("root") as 
HTMLElement; 
const root = createRoot(rootEl); // No need to cast to HTMLElement

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
