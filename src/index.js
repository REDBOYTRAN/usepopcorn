import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";

import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={3} messages={["Sheet", "Normal", "Good"]} />
    <StarRating color="red" size={36} maxRating={10} defaultRating={3} />
  </React.StrictMode>
);
