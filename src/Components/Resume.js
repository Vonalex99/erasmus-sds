import React, { Component } from "react";
import Slide from "react-reveal";
import SeeCourses from './Buttons/SeeCourses';

class Resume extends Component {

  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;


    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });



    return (
      <section id="resume">
        
        <Slide left duration={1300}>
          <div className="row education">



            <SeeCourses auth={this.props.auth} database={this.props.database}></SeeCourses>          
          
          </div>
        </Slide>

      </section>
    );
  }
}

export default Resume;
