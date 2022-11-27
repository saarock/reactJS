import React from "react";
import ReactDOM  from "react-dom/client";
import Main from './component/Main';
import './index.css'


function IndexMy() {
    return (
        <>
        <Main/>
        </>
    )
}

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<IndexMy/>)