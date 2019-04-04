import React, { Component } from "react";
import meoden from "./img/meoden.jpg";
import "./Sidenav.scss";
import { NavLink } from "react-router-dom";
class Sidenav extends Component {
  render() {
    return (
      <>
        <div class="card">
          <img
            class="card-img-top rounded-circle img-fuild"
            src={meoden}
            alt="meoden"
          />
          <div class="card-body text-center">
            <h5 class="card-title lead">Hoang Nhat Thuan</h5>
            <div className="row">
              <a>
                <i class="fa fa-facebook" aria-hidden="true" />
              </a>
              <a>
                <i class="fa fa-github" aria-hidden="true" />
              </a>
              <a>
                <i class="fa fa-linkedin" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <nav class="navbar">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <NavLink exact activeClassName="active" to="/" class="nav-link">
                <i class="fa fa-home" aria-hidden="true">
                  <span className="ml-3">Home</span>
                </i>
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink activeClassName="active" to="/about" class="nav-link">
                <i class="fa fa-paw">
                  <span className="ml-3">About Me</span>
                </i>
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink activeClassName="active" to="/porfolio" class="nav-link">
                <i class="fa fa-code" aria-hidden="true">
                  <span className="ml-3">Project</span>
                </i>
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink activeClassName="active" to="/contact" class="nav-link">
                <i class="fa fa-paper-plane" aria-hidden="true">
                  <span className="ml-3">Contact</span>
                </i>
              </NavLink>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Sidenav;
