import React from 'react'
import "./About.css"
import Card from '../../Card/Card'
function About() {
  return (
    <div id='about'>
<div className="leftabout">
<div className="circle-line">
    <div className="circle"></div>
    <div className="line"></div>
    <div className="circle"></div>
    <div className="line"></div>
    <div className="circle"></div>
</div>
<div className="aboutdetails">
    <div className="personalinfo">
        <h1>Personal Info</h1>
        <ul>
            <li>
                <span>NAME</span> : PAWAN KUMAR
            </li>
            <li>
                <span>AGE</span> : 21 YEARS
            </li>
            <li>
                <span>GENDER</span> : MALE
            </li>
            <li>
                <span>LANGUAGE KNOWN</span> : HINDI,ENGLISH
            </li>
        </ul>
    </div>
    <div className="Education">
        <h1>Education</h1>
        <ul>
            <li>
                <span>DEGREE</span> : BTECH
            </li>
            <li>
                <span>BRANCH</span> : COMPUTER SCIENCE & ENGINEERING
            </li>
            <li>
                <span>SEMSTER</span> : 6TH
            </li>
            <li>
                <span>CGPA</span> : 7.03
            </li>
        </ul>
    </div>
    <div className="Skills">
        <h1>Skills</h1>
        <ul>
            <li>
            FRONTEND DEVELOPER
            </li>
            <li>
                LEARNIG JAVA WITH DSA
            </li>
            <li>
                TRADING
            </li>
        </ul>
    </div>
</div>
</div>
<div className="rightabout">
 <Card title="FRONTEND DEVELOPER"/>
 <Card title="LEARNING JAVA WITH DSA"/>
 <Card title="LEARNING TRADING"/>
</div>
    </div>
  )
}

export default About
