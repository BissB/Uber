import React from "react";
import'./Image1.css';
// import driverimage from'./view-from-senior-businessman-official-clothes-driving-modern-new-car.jpg';
import driverimage from './img/이미지.jpg';

console.groupCollapsed("src/component/image.js");console.groupEnd();

function Image1(){
    return(

        <div className="driver-image">
            <img src = {driverimage} alt ='Driver picture'/>
        </div>

    );
}


export default Image1;


// 이미지 구간
//{이미지가 어디인지(src) 이미지가 안보이면 대신 보여주는 설정(alt)}/
