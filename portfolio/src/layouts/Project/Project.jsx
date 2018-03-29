import ScrollAnimation from "react-animate-on-scroll";
import React from "react";
import "./Project.css";
import "animate.css/animate.min.css";

class Project extends React.Component {
  render() {
    const { src, alt, text } = this.props;

    return (
      <ScrollAnimation
        animateIn="fadeInLeft"
        animateOut="bounceOutLeft">
        <div className="project">
          <h2>{text}</h2>
          <img src={src} alt={alt} />
        </div>
      </ScrollAnimation>
    );
  }
}

export default Project;
