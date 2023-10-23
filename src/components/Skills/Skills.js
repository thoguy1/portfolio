import React from 'react';
import './skills.css';
import Html_css from '../../assets/html_css.png';
import JavaScript from '../../assets/javascript.png';
import ReactLogo from '../../assets/react.png';
import NodeLogo from '../../assets/node.webp';

function Skills() {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">I am a graduate JavaScript developer with strong problem-solving skill with a commitment to continuous learning and staying abreast of emerging technologies in the field of web development.</span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={Html_css} alt="HTML_CSS" className="skillBarImg" />
          <div className="skillBarText">
            <h2>HTML/CSS</h2>
            <p>Familiar with HTML5, CSS3, and responsive design principles, enabling the creation of visually appealing and cross-browser compatible web applications.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={JavaScript} alt="JavaScript" className="skillBarImg" />
          <div className="skillBarText">
            <h2>JavaScript</h2>
            <p>Proficient in writing clean and efficient JavaScript code, utilizing core language concepts, data structures, and algorithms to develop robust and scalable applications.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={ReactLogo} alt="React_logo" className="skillBarImg" />
          <div className="skillBarText">
            <h2>React JS</h2>
            <p>Understanding of one of the most popular JavaScript frameworks and libraries such as React to build dynamic and interactive user interfaces and front-end applications.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={NodeLogo} alt="Node_Express_MongoDB" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Node JS</h2>
            <p>Knowledgeable in utilising Node.js, Express.js, and MongoDB to build server-side applications, RESTful APIs, and handling database operations.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills