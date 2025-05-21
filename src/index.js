import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import StarRating from "./StarRating";

// function Test() {
//   const [rate, setRate] = useState(0);

//   function handleSetRate(x) {
//     console.log("hello");
//     setRate(x);
//   }

//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSetRating={handleSetRate} />
//       <p>This movie was rated {rate} starts</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={3} messages={["Sheet", "Normal", "Good"]} />
    <StarRating color="red" size={36} maxRating={10} defaultRating={3} />
    <Test /> */}
  </React.StrictMode>
);
