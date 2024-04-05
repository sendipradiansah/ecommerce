import React from 'react';
import './CardPackage.scss';

export default function CardPackage(props) {
  return (
    <div className="boxPackage">
        <img src={props.img}></img>
        <div className="desc">
            <div className="title">{props.title}</div>
            <div className="subtitle">
                <div>Gene: <span className="textBold">{props.gene}</span></div>
                <img src={props.imgdot}></img>
                <div>Age: <span className="textBold">{props.age}</span></div>
            </div>
            <div className="price">{props.price}</div>
            <div className="package">
                <div className="imgPackage"><img src={props.imgPackage}></img></div>
                <div><img src={props.imgdot}></img></div>
                <div className="textPackage">{props.textPackage}</div>
            </div>
        </div>
    </div>
  )
}
