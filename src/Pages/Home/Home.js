import React, {useState} from 'react';
import './Home.scss';
import Card from '../Components/Card/Card';
import CardPackage from '../Components/CardPackage/CardPackage';
import CardBadge from '../Components/CardBadge/CardBadge';
import Footer from '../Components/Footer/Footer';

import Logo from '../../Assets/Images/logo.png';
import Search from '../../Assets/Images/icon-search.png';
import Vietnam from '../../Assets/Images/vietnam.png';
import CaretDown from '../../Assets/Images/caret-down.png';
import CaretRight from '../../Assets/Images/caret-right.png';
import Play from '../../Assets/Images/play-circle.png';
import Cat from '../../Assets/Images/cat.png';
import Cat1 from '../../Assets/Images/cat1.jpg';
import Cat2 from '../../Assets/Images/cat2.jpg';
import Cat3 from '../../Assets/Images/cat3.jpg';
import Cat4 from '../../Assets/Images/cat4.jpg';
import Cat5 from '../../Assets/Images/cat5.jpg';
import Cat6 from '../../Assets/Images/cat6.jpg';
import Cat7 from '../../Assets/Images/cat7.jpg';
import Cat8 from '../../Assets/Images/cat8.jpg';
import Dot from '../../Assets/Images/dot.png';
import Brand1 from '../../Assets/Images/brand1.png';
import Brand2 from '../../Assets/Images/brand2.png';
import Brand3 from '../../Assets/Images/brand3.png';
import Brand4 from '../../Assets/Images/brand4.png';
import Brand5 from '../../Assets/Images/brand5.png';
import Brand6 from '../../Assets/Images/brand6.png';
import Brand7 from '../../Assets/Images/brand7.png';
import Foot from '../../Assets/Images/foot.png';
import Package from '../../Assets/Images/package.png';

export default function Home() {


    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
  return (
    <div>
        <div className="containerHome">
            <div className="header">
                <div className="navigation">
                    <div className="navigation_inner">
                        <div className="mobMenu" onClick={() => toggleMenu()}>
                            <svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.1328 0.15625H0.867188C0.725391 0.15625 0.609375 0.272266 0.609375 0.414062V2.47656C0.609375 2.61836 0.725391 2.73438 0.867188 2.73438H26.1328C26.2746 2.73438 26.3906 2.61836 26.3906 2.47656V0.414062C26.3906 0.272266 26.2746 0.15625 26.1328 0.15625ZM26.1328 20.2656H0.867188C0.725391 20.2656 0.609375 20.3816 0.609375 20.5234V22.5859C0.609375 22.7277 0.725391 22.8438 0.867188 22.8438H26.1328C26.2746 22.8438 26.3906 22.7277 26.3906 22.5859V20.5234C26.3906 20.3816 26.2746 20.2656 26.1328 20.2656ZM26.1328 10.2109H0.867188C0.725391 10.2109 0.609375 10.327 0.609375 10.4688V12.5312C0.609375 12.673 0.725391 12.7891 0.867188 12.7891H26.1328C26.2746 12.7891 26.3906 12.673 26.3906 12.5312V10.4688C26.3906 10.327 26.2746 10.2109 26.1328 10.2109Z" fill="#2C394B"/>
                            </svg>
                        </div>
                        <a href=""><img src={Logo}></img></a>
                        <div onClick={() => toggleMenu()} className={menuOpen ? "dropmenu showmenu" : "listmenu"}>
                            <div><a href="">Home</a></div>
                            <div><a href="">Category</a></div>
                            <div><a href="">About</a></div>
                            <div><a href="">Contact</a></div>
                        </div>
                        <div onClick={() => toggleMenu()}  className={menuOpen ? "searchSection showmenu" : "searchSection"}>
                            <img src={Search}></img>
                            <input type="text" placeholder="Search something here!" />
                            <div className="button">Join the community</div>
                            <div className="select">
                                <img src={Vietnam} className="imgFlag"></img>
                                <div>VND</div>
                                <img src={CaretDown} className="imgCaret"></img>
                            </div>
                        </div>
                        <img className="search" src={Search}></img>
                    </div>
                </div>
                <div className="headerContent">
                    <div className="desc">
                        <div className="title"><label>One More Friend</label></div>
                        <div className="subtitle"><label>housands More Fun</label></div>
                        <div className="detail"><label>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</label></div>
                        <div className="button">
                            <div className="transparent">
                                <div>View Intro</div>
                                <img src={Play}></img>
                            </div>
                            <div className="color">Explore Now</div>
                        </div>
                    </div>
                    <div className="image">
                        <img src={Cat}></img>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="titlePage">
                    <div className="left">
                        <div className="title"><label>Whats new?</label></div>
                        <div className="subtitle"><label>Take A Look At Some Of Our Pets</label></div>
                    </div>
                    <div className="right">
                        <div className="transparent">
                                <div>View More</div>
                                <img src={CaretRight}></img>
                            </div>
                    </div>
                </div>
                <div className="listData">
                    <Card img={Cat1} imgdot={Dot} title="Cat 1" gene="Male" age="02 months"  price="6.900.000 VND"/>
                    <Card img={Cat2} imgdot={Dot} title="Cat 2" gene="Female" age="02 months"  price="3.900.000 VND"/>
                    <Card img={Cat3} imgdot={Dot} title="Cat 3" gene="Male" age="02 months"  price="6.00.000 VND"/>
                    <Card img={Cat4} imgdot={Dot} title="Cat 4" gene="Male" age="02 months"  price="5.500.000 VND"/>
                    <Card img={Cat5} imgdot={Dot} title="Cat 5" gene="Female" age="02 months"  price="6.900.000 VND"/>
                    <Card img={Cat6} imgdot={Dot} title="Cat 6" gene="Female" age="02 months"  price="2.500.000 VND"/>
                    <Card img={Cat7} imgdot={Dot} title="Cat 7" gene="Female" age="02 months"  price="7.000.000 VND"/>
                    <Card img={Cat8} imgdot={Dot} title="Cat 8" gene="Male" age="02 months"  price="3.300.000 VND"/>
                    <Card img={Cat1} imgdot={Dot} title="Cat 1" gene="Male" age="02 months"  price="6.900.000 VND"/>
                    <Card img={Cat2} imgdot={Dot} title="Cat 2" gene="Female" age="02 months"  price="3.900.000 VND"/>
                </div>
                <div className="banner">
                    <div className="image">
                        <img src={Cat}></img>
                    </div>
                    <div className="desc">
                        <div className="title"><label>One More Friend</label></div>
                        <div className="subtitle"><label>housands More Fun</label></div>
                        <div className="detail"><label>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</label></div>
                        <div className="button">
                            <div className="transparent">
                                <div>View Intro</div>
                                <img src={Play}></img>
                            </div>
                            <div className="color">Explore Now</div>
                        </div>
                    </div>
                </div>
                <div className="titlePage">
                    <div className="left">
                        <div className="title"><label>Hard to choose right products for your pets</label></div>
                        <div className="subtitle"><label>Our Products</label></div>
                    </div>
                    <div className="right">
                        <div className="transparent">
                                <div>View More</div>
                                <img src={CaretRight}></img>
                            </div>
                    </div>
                </div>
                <div className="listData">
                    <CardPackage img={Cat1} imgdot={Dot} imgPackage={Package} title="Cat 1" gene="Male" age="02 months"  price="6.900.000 VND" textPackage="Free Toy & Free Shaker"/>
                    <CardPackage img={Cat2} imgdot={Dot} imgPackage={Package} title="Cat 2" gene="Female" age="02 months"  price="3.900.000 VND"  textPackage="Free Toy & Free Shaker"/>
                    <CardPackage img={Cat3} imgdot={Dot} imgPackage={Package} title="Cat 3" gene="Male" age="02 months"  price="6.00.000 VND" textPackage="Free Toy & Free Shaker"/>
                    <CardPackage img={Cat4} imgdot={Dot} imgPackage={Package} title="Cat 4" gene="Male" age="02 months"  price="5.500.000 VND" textPackage="Free Toy & Free Shaker"/>
                    <CardPackage img={Cat5} imgdot={Dot} imgPackage={Package} title="Cat 5" gene="Female" age="02 months"  price="6.900.000 VND" textPackage="Free Food & Free Shaker"/>
                    <CardPackage img={Cat6} imgdot={Dot} imgPackage={Package} title="Cat 6" gene="Female" age="02 months"  price="2.500.000 VND" textPackage="Free Toy & Free Shaker"/>
                    <CardPackage img={Cat7} imgdot={Dot} imgPackage={Package} title="Cat 7" gene="Female" age="02 months"  price="7.000.000 VND" textPackage="Free Food & Free Shaker"/>
                    <CardPackage img={Cat8} imgdot={Dot} imgPackage={Package} title="Cat 8" gene="Male" age="02 months"  price="3.300.000 VND" textPackage="Free Toy & Free Shaker"/>
                    <CardPackage img={Cat1} imgdot={Dot} imgPackage={Package} title="Cat 1" gene="Male" age="02 months"  price="6.900.000 VND" textPackage="Free Toy & Free Shaker"/>
                    <CardPackage img={Cat2} imgdot={Dot} imgPackage={Package} title="Cat 2" gene="Male" age="02 months"  price="4.900.000 VND" textPackage="Free Toy & Free Shaker"/>
                </div>
                <div className="titlePage">
                    <div className="left">
                        <div className="title"><label>Proud to be part of <span style={{fontSize: "17px", fontWeight: 800, color: "#003459"}}>Pet Sellers</span></label></div>
                    </div>
                    <div className="right">
                        <div className="transparent">
                            <div>View More</div>
                            <img src={CaretRight}></img>
                        </div>
                    </div>
                </div>
                <div className="listBrand">
                    <img src={Brand1}></img>
                    <img src={Brand2}></img>
                    <img src={Brand3}></img>
                    <img src={Brand4}></img>
                    <img src={Brand5}></img>
                    <img src={Brand6}></img>
                    <img src={Brand7}></img>
                </div>
                <div className="banner2">
                    <div className="desc">
                        <div className="title"><label>Adoption</label><img src={Foot}></img></div>
                        <div className="subtitle"><label>We Need Help. So Do They.</label></div>
                        <div className="detail"><label>Adopt a pet and give it a home,</label>
                        <br />
                        <label>it will be love you back unconditionally.</label>
                        </div>
                        <div className="button">
                            <div className="color">Explore Now</div>
                            <div className="transparent">
                                <div>View Intro</div>
                                <img src={Play}></img>
                            </div>
                        </div>
                    </div>
                    <div className="image">
                        <img src={Cat}></img>
                    </div>
                </div>
                <div className="titlePage">
                    <div className="left">
                        <div className="title"><label>You already now?</label></div>
                        <div className="subtitle"><label>Useful Pet Knowledge</label></div>
                    </div>
                    <div className="right">
                        <div className="transparent">
                                <div>View More</div>
                                <img src={CaretRight}></img>
                            </div>
                    </div>
                </div>
                <div className="listData">
                    <CardBadge img={Cat1} imgdot={Dot} title="What is a Pomeranian? How to Identify Pomeranian Cats" desc="The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed."/>
                    <CardBadge img={Cat2} imgdot={Dot} title="Dog Diet You Need To Know" desc="Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance."/>
                    <CardBadge img={Cat3} imgdot={Dot} title="Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively" desc="Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog."/>
                    <CardBadge img={Cat4} imgdot={Dot} title="Dog Diet You Need To Know" desc="Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance."/>
                    <CardBadge img={Cat5} imgdot={Dot} title="Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively" desc="The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed."/>
                    <CardBadge img={Cat6} imgdot={Dot} title="Dog Diet You Need To Know" desc="Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog."/>
                    <CardBadge img={Cat7} imgdot={Dot} title="Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively" desc="The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed."/>
                    <CardBadge img={Cat8} imgdot={Dot} title="Dog Diet You Need To Know" desc="The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed."/>
                    <CardBadge img={Cat1} imgdot={Dot} title="What is a Pomeranian? How to Identify Pomeranian Cats" desc="The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed."/>
                    <CardBadge img={Cat2} imgdot={Dot} title="Dog Diet You Need To Know" desc="Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance."/>
                </div>
            </div>
            <Footer />
        </div>
    </div>
  )
}
