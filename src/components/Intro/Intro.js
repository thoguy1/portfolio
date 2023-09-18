import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';


const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Petrus</span> <br />Front-end Web Developer</span>
        <p className="introPara">A passionate and creative Front-End Developer with a strong drive <br /> 
        for crafting attractive and user-friendly web experiences.</p>
        <Link activeClass="active" to="contactPage" spy={true} smooth="true" offset={-50} duration={500}><button className="btn"><img src={btnImg} alt="Hire" className="btnImg"/>Hire me</button></Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro