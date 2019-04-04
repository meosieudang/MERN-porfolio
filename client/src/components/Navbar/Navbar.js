/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./Navbar.scss";
import { SwipeableDrawer } from "@material-ui/core";
import Sidenav from "../Sidenav/Sidenav";
class Navbar extends Component {
  state = { left: false };
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };
  render() {
    return (
      <>
        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
          onOpen={this.toggleDrawer("left", true)}
          transitionDuration={300}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
            className="custom_drawer"
          >
            <Sidenav />
          </div>
        </SwipeableDrawer>

        <nav className="navbar fixed-top shadow">
          <a // eslint-disable-next-line
            onClick={this.toggleDrawer("left", true)}
            className="sidenav"
            data-toggle="tooltip"
            data-placement="right"
            title="Tooltip on right"
          >
            <i className={!this.props.sidebarOpen ? "fa fa-bars" : ""} />
          </a>
          <div className="row">
            <a href="https://www.facebook.com/meosieudang1" target={"_blank"}>
              <i className="fa fa-facebook" aria-hidden="true" />
            </a>
            <a href="https://github.com/meosieudang" target={"_blank"}>
              <i className="fa fa-github" aria-hidden="true" />
            </a>
            <a href="" target={"_blank"}>
              <i className="fa fa-linkedin" aria-hidden="true" />
            </a>
          </div>
        </nav>
        {/* <LinkPage
          name1="Home"
          path1=""
          name2="About"
          path2="about"
          history={this.props.history}
        /> */}
      </>
    );
  }
}

export default Navbar;
