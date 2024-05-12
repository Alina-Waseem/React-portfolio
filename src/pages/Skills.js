import React from 'react';
import './Skills.css';

export default function Skills() {
  return (
    <div className="skillsbody" id="skills">
      <br/><br/>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontWeight: 'bold', color: '#000' }}>MY SKILLS</h1>
        <div className="hr-line"></div>
      </div>
      <div className="skills">
        <ul>
          <li><h3>HTML</h3>
            <span className="bar"><span className="html"></span></span>
          </li>
          <li><h3>CSS</h3>
            <span className="bar"><span className="css"></span></span>
          </li>
          <li><h3>JavaScript</h3>
            <span className="bar"><span className="javascript"></span></span>
          </li>
          <li><h3>C</h3>
            <span className="bar"><span className="c"></span></span>
          </li>
          <li><h3>C++</h3>
            <span className="bar"><span className="cpp"></span></span>
          </li>
          <li><h3>Java</h3>
            <span className="bar"><span className="java"></span></span>
          </li>
          <li><h3>React-js</h3>
            <span className="bar"><span className="react"></span></span>
          </li>
        </ul>
        </div>
      <br/>
    </div >
  );
}
