import React from 'react';
import './Footer.scss';

import Logo from '../../../Assets/Images/logo.png';
import Facebook from '../../../Assets/Images/fb.png';
import X from '../../../Assets/Images/x.png';
import Instagram from '../../../Assets/Images/ig.png';
import Youtube from '../../../Assets/Images/yt.png';

export default function Footer() {
  return (
    <div className="footer">
        <div className="subscribe">
            <div className="left">
                <div className="desc">
                    <label className="title">Register Now So You Don't Miss</label>
                    <label className="title">Our Programs</label>
                </div>
            </div>
            <div className="right">
                <div className="inputSection">
                    <input placeholder="Enter your email"></input>
                    <div className="button">Subscribe Now</div>
                </div>
            </div>
        </div>
        <div className="listMenu">
            <div className="left">
                <div className="menu">
                    <div><a href="">Home</a></div>
                    <div><a href="">Category</a></div>
                    <div><a href="">About</a></div>
                    <div><a href="">Contact</a></div>
                </div>
            </div>
            <div className="right">
                <div className="socmed">
                    <img src={Facebook} width="17" height="17"></img>
                    <img src={X} width="20" height="17"></img>
                    <img src={Instagram} width="17" height="17"></img>
                    <img src={Youtube} width="20" height="16"></img>
                </div>
            </div>
        </div>
        <hr />
        <div className="under">
            <div className="copyright"><label>&copy; 2022 Monito. All rights reserved.</label></div>
            <a href=""><img className="logo" src={Logo}></img></a>
            <div className="termPrivacy">
                <div><a href="">Terms of Service</a></div>
                <div><a href="">Privacy Policy</a></div>
            </div>
        </div>
    </div>
  )
}
