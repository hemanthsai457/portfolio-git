import React from "react";
import './ReturnToTop.css';

const ReturnToTop = ({onClick}) => {
    return ( 
        <button className="ReturnToTop" onClick={onClick}>
            Return To Top
        </button>
    );
}
 
export default ReturnToTop;