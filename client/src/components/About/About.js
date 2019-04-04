import React, { Component } from "react";
import "./About.scss";
import { Link } from "react-router-dom";
import NextLink from "../LinkPage/NextLink";
class About extends Component {
  render() {
    return (
      <>
        <NextLink
          name={"Porfolio"}
          path={"porfolio"}
          history={this.props.history}
        />
        <div className="container  padding_about">
          <div className="about_content">
            <h1 className="display-4">Thank you for visiting my website</h1>
            <h1 className="display-4">Hello, my name is Thuận.</h1>
            <p className="lead">
              I am an <Link to="/porfolio/1">award winning</Link> Web Developer
              and UI/UX Javascript with framework ReactJS.
            </p>
            <p className="lead">
              Feel free to take a look at my latest projects on the{" "}
              <Link to="/porfolio">web portfolio page.</Link>
            </p>
            <p className="lead">
              Any questions please <Link to="/contact">contact me.</Link>
            </p>
          </div>

          <div className="about_social">
            <span>Follow me</span>
            <a>
              <i class="fa fa-facebook facebook" aria-hidden="true" />
            </a>
            <a>
              <i class="fa fa-github github" aria-hidden="true" />
            </a>
            <a>
              <i class="fa fa-linkedin linkedin" aria-hidden="true" />
            </a>
            <a>
              <i class="fa fa-google google" aria-hidden="true" />
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default About;
