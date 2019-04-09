import React, { Component } from "react";
import { Paper, Grid, TextField, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { addNewProfile } from "../../actions/profile";

class CreateProfile extends Component {
  state = {
    name: "",
    about: "",
    tech: "",
    src: "",
    img: "",
    demo: ""
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    e.preventDefault();
    const upper = this.state.tech
      .split(" ")
      .map(item => item.toUpperCase())
      .join("");
    const newProfile = {
      name: this.state.name,
      about: this.state.about,
      tech: upper,
      src: this.state.src,
      img: this.state.img,
      demo: this.state.demo
    };
    console.log(newProfile);
    this.props.addNewProfile(newProfile);
  };
  render() {
    return (
      <Paper style={{ marginTop: "20vh", padding: "2%" }}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <TextField
              fullWith
              label="Name"
              onChange={this.onChange}
              name="name"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWith
              label="About"
              onChange={this.onChange}
              name="about"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWith
              label="Tech"
              onChange={this.onChange}
              name="tech"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWith
              label="Source"
              onChange={this.onChange}
              name="src"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWith
              label="Image"
              onChange={this.onChange}
              name="img"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWith
              label="Demo"
              onChange={this.onChange}
              name="demo"
            />
          </Grid>
          <Grid item xs={12}>
            <form onSubmit={this.onSubmit}>
              <Button type="submit">Submit</Button>
            </form>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default connect(
  null,
  { addNewProfile }
)(CreateProfile);
