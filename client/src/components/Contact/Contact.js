/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./Contact.scss";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ContactMail from "@material-ui/icons/ContactMail";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Validator from "validator";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    nameErr: "",
    emailErr: "",
    messageErr: "",
    open: false
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ open: false });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const err = this.validate(this.state);
    if (Object.keys(err).length === 0) {
      console.log("ok");
      this.setState({
        name: "",
        email: "",
        message: "",
        nameErr: "",
        emailErr: "",
        messageErr: "",
        open: true
      });
    } else {
      console.log("err");
    }
  };

  validate = value => {
    const err = {};
    if (Validator.isEmpty(value.name))
      err.nameErr = "Please enter your name bro";
    if (Validator.isEmpty(value.message))
      err.messageErr = "Please enter your message bro";
    if (!Validator.isEmail(value.email)) err.emailErr = "Invalid email bro";
    this.setState({
      nameErr: err.nameErr,
      emailErr: err.emailErr,
      messageErr: err.messageErr
    });
    return err;
  };

  render() {
    const { name, email, message, nameErr, emailErr, messageErr } = this.state;

    return (
      <>
        <div className="container py-5 mt-5 padding_contact">
          <div className="pb-5">
            <h1 className="display-4">Get in touch</h1>
            <p className="lead">
              If you wanna get in touch, talk to me about a project
              collaboration or just say hi, fill up the awesome form below or
              send an email to meosieudang@gmail.com and ~let's talk.
            </p>
          </div>
          <form
            onSubmit={this.onSubmit}
            className="bg-white shadow-lg p-5 rounded"
          >
            <div className="d-flex align-items-baseline contact_field mb-3">
              <div className="contact_icon d-inline">
                <AccountCircle />
              </div>
              <TextField
                error={nameErr ? true : false}
                label="Your Name..."
                autoFocus
                className="contact_input"
                name="name"
                value={name}
                onChange={this.onChange}
              />
            </div>
            <div className="d-flex align-items-baseline contact_field mb-3">
              <div className="contact_icon">
                <ContactMail />
              </div>
              <TextField
                error={emailErr ? true : false}
                label="Your Email..."
                className="contact_input"
                name="email"
                value={email}
                onChange={this.onChange}
              />
            </div>
            <div className="d-flex align-items-baseline contact_field mb-3">
              <div className="contact_icon">
                <ContactMail />
              </div>
              <TextField
                error={messageErr ? true : false}
                label="Your Message..."
                className="contact_input"
                name="message"
                value={message}
                onChange={this.onChange}
              />
            </div>
            <Button
              className="contact_button_submit mt-3"
              type="submit"
              color="primary"
              variant="contained"
              onClick={this.handleClick}
            >
              Submit
            </Button>
          </form>

          <div className="contact_social py-5">
            <h1 className="display-4">Let's get social</h1>
            <p className="lead">
              Follow my online Facebook and profiles on GitHub and Linkedin.
            </p>
            <ul className="nav list-unstyled m-0 p-0">
              <li>
                <a
                  href="https://www.facebook.com/meosieudang1"
                  target={"_blank"}
                  className="btn btn-danger social_facebook"
                >
                  <i class="fa fa-facebook" aria-hidden="true" />
                  <span className="lead">FACEBOOK</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/meosieudang"
                  target={"_blank"}
                  className="btn btn-danger social_github"
                >
                  <i class="fa fa-github" aria-hidden="true" />
                  <span className="lead">GITHUB</span>
                </a>
              </li>
              <li>
                <a className="btn btn-danger social_linkedin">
                  <i class="fa fa-linkedin" aria-hidden="true" />
                  <span className="lead">LINKEDIN</span>
                </a>
              </li>
            </ul>
          </div>
          <Snackbar
            className="snackbar"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left"
            }}
            open={this.state.open}
            autoHideDuration={3000}
            onClose={this.handleClose}
            ContentProps={{
              "aria-describedby": "message-id"
            }}
            message={<span id="message-id">SUBMIT SUCCESS</span>}
            action={[
              <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                onClick={this.handleClose}
              >
                <CloseIcon />
              </IconButton>
            ]}
          />
        </div>
      </>
    );
  }
}

export default Contact;
