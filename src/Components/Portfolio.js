import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";
import Button from '@mui/material/Button';
import LaDialog from './CreateLaComponents/LaDialog'
import StudentInformation from './CreateLaComponents/StudentInformation';


let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{projects.title}</div>
          </div>
        </div>
      );
    });


    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed" >
              <h1>Need help with your Learning Agreement?</h1>
              <LaDialog database={this.props.database}></LaDialog>
            </div>


          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
