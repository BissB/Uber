import React from "react";
import'./Image2.css';
import girlimage from './img/이미지2.png';


console.groupCollapsed("src/component/image.js");console.groupEnd();

function Image2(){
    return(

        <div className="girl-image">
            <img src = {girlimage} alt ='Girl picture'/>
        </div>

    );
}


export default Image2;


// 이미지 구간
//{이미지가 어디인지(src) 이미지가 안보이면 대신 보여주는 설정(alt)}/
