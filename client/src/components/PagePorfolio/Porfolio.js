/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./Porfolio.scss";
import { connect } from "react-redux";
import { getPorfolioRequest, filterProject } from "../../actions/profile";
import PorfolioItem from "./PorfolioItem/PorfolioItem";
import { Button, Paper, Grid, Typography } from "@material-ui/core";

class Porfolio extends Component {
  state = {
    active: "ALL"
  };
  componentDidMount() {
    this.props.getPorfolioRequest();
  }

  handleClick = item => {
    this.props.filterProject(item);
    this.setState({
      active: item
    });
  };

  itemRender = arr =>
    arr.map(item => <PorfolioItem item={item} key={item._id} />);

  render() {
    const { porfolio, search } = this.props;
    const buttons = [
      "all",
      "Redux",
      "React",
      "NodeJS",
      "MongoDB",
      "Express",
      "ES6",
      "HTML5",
      "API",
      "Animation",
      "SCSS",
      "Responsive"
    ];

    const listButton = buttons.map((item, i) => (
      <Button
        key={i}
        variant="contained"
        className={
          this.state.active === item.toUpperCase()
            ? "mr-2 mb-2 active"
            : "mr-2 mb-2"
        }
        onClick={() => this.handleClick(item.toUpperCase())}
      >
        {item}
      </Button>
    ));

    const listPorfolio =
      Object.keys(search).length === 0
        ? this.itemRender(porfolio)
        : this.itemRender(search);
    return (
      <>
        <div className="header_porfolio">
          <div className="overlay" />
          <div className="porfolio_content">
            <h1 className="display-3 text-capitalize">{"hello :)"}</h1>
            <p className="lead text-capitalize">have a good day</p>
          </div>
        </div>
        <div className="porfolio_intro">
          <Grid
            container
            justify="center"
            alignItems="center"
            style={{ height: "100%" }}
          >
            <Grid item xs={10} md={6}>
              <Paper style={{ padding: 20 }}>
                <Typography variant="h2" paragraph align="center">
                  Web Developer Porfolio
                </Typography>
                <Typography variant="h5" paragraph align="center">
                  {
                    "Below are the projects I did during self-learning and learning at the academy."
                  }
                </Typography>
                <Typography variant="h5" paragraph align="center">
                  {"Take Enjoys :)"}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </div>

        <div className="container section-padding">
          <div className="pb-3">
            {listButton}
            <p className="text-danger mt-3" />
          </div>
          <p className="text-white">
            {Object.keys(search).length === 0
              ? "Showing all my projects"
              : `Showing ${Object.keys(search).length} projects filtered by ${
                  this.state.active
                } `}
          </p>
          <div className="row">{listPorfolio}</div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    porfolio: state.porfolio.porfolios,
    search: state.porfolio.search
  };
};

export default connect(
  mapStateToProps,
  { getPorfolioRequest, filterProject }
)(Porfolio);

// onSearch = value => {
//   const { porfolio } = this.props;
//   const result = [];
//   porfolio.map(item => {
//     item.technical.filter(i => {
//       if (i === value) {
//         result.push(...item);
//       }
//     });
//   });
//   this.setState({
//     search: [...[], result]
//   });
//   for (let i = 0; i < porfolio.length; i++) {
//     const el = porfolio[i];
//     for (let i = 0; i < el.technical.length; i++) {
//       const item = el.technical[i];
//       if (item === value) {
//         result.push(el);
//       }
//     }
//   }
// };
// return (
//   <div className="loading">
//     <div class="spinner-grow text-muted" />
//     <div class="spinner-grow text-primary" />
//     <div class="spinner-grow text-success" />
//     <div class="spinner-grow text-info" />
//     <div class="spinner-grow text-warning" />
//     <div class="spinner-grow text-danger" />
//     <div class="spinner-grow text-secondary" />
//     <div class="spinner-grow text-dark" />
//     <div class="spinner-grow text-light" />
//   </div>
// );
