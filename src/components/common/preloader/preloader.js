import preloader from "../../../assets/images/preloader.svg";
import React from "react";

let Preloader = (props) => {
    return <div style={{border: 'solid red'}}>
        <img src={preloader}/>
    </div>
}
export default Preloader
