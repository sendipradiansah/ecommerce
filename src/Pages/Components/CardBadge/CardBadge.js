import React from 'react';
import './CardBadge.scss';

export default function CardBadge(props) {
  return (
    <div className="boxBadge">
        <img src={props.img}></img>
        <div className="badge">Pet knowledge</div>
        <div className="desc">
            <div className="title">{props.title}</div>
            <div className="subtitle">{props.desc}</div>
        </div>
    </div>
  )
}
