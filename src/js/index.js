//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/Home.js";
import Digit from "./component/Digit.js";

//render your react application
let seconds= 0;

setInterval(() => {
    const digit1 = Math.floor(seconds/1000000)
    const digit2 = Math.floor(seconds/100000)
    const digit3 = Math.floor(seconds/10000)
    const digit4 = Math.floor(seconds/1000)
    const digit5 = Math.floor(seconds/100)
    const digit6 = Math.floor(seconds/10)
    const digit7 = Math.floor(seconds/1)
ReactDOM.createRoot(document.getElementById('app')).render(<Digit digit1={digit1} digit2={digit2}digit3={digit3}digit4={digit4}digit5={digit5}digit6={digit6}digit7={digit7}/>);
seconds++;
}, 1000
);