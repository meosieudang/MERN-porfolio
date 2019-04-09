import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import { Button } from "@material-ui/core";
class Home extends Component {
  render() {
    return (
      <>
        <header className="">
          <div className="header">
            <video
              playsinline="playsinline"
              autoplay="autoplay"
              muted="muted"
              loop="loop"
            >
              <source
                src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
                type="video/mp4"
              />
            </video>
            <div className="header__overlay" />
            <div class="header__list">
              <div class="w-100 text-white header__content">
                <h1 class="display-3 ">Web Developer</h1>
                <p class="lead">React, Redux, MongoDB, NodeJS, Express</p>

                <Button
                  variant="contained"
                  component={Link}
                  to="/porfolio"
                  style={{ background: "#20c997" }}
                >
                  Porfolio
                </Button>

                <Button variant="contained" className="bg-danger">
                  <a
                    className="text-white text-center"
                    href="https://www.docdroid.net/DYal0DK/hoangnhatthuanresume-1.pdf"
                    target={"_blank"}
                  >
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Home;
