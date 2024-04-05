import React from 'react';
import './Card.scss';

export default function Card(props) {
  return (
    <div className="box">
        <img src={props.img}></img>
        <div className="desc">
            <div className="title">{props.title}</div>
            <div className="subtitle">
                <div>Gene: <span className="textBold">{props.gene}</span></div>
                <img src={props.imgdot}></img>
                <div>Age: <span className="textBold">{props.age}</span></div>
            </div>
            <div className="price">{props.price}</div>
        </div>
    </div>
  )
}
