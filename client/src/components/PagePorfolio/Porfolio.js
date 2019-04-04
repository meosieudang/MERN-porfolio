/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./Porfolio.scss";
import { connect } from "react-redux";
import * as actions from "../../actions/index";
import PorfolioItem from "./PorfolioItem/PorfolioItem";
import { Button } from "@material-ui/core";

class Porfolio extends Component {
  state = {
    active: "ALL"
  };
  componentDidMount() {
    this.props.getListPorfolio();
  }

  handleClick = item => {
    this.props.getData(item);
    console.log(item);
    this.setState({
      active: item
    });
  };

  render() {
    const { porfolio, search } = this.props;
    const buttons = [
      "ALL",
      "Redux",
      "React",
      "JavaScript ES6",
      "HTML5",
      "RESTful API",
      "Animation",
      "SCSS",
      "Responsive"
    ];

    const listButton = buttons.map((item, i) => (
      <Button
        key={i}
        variant="contained"
        className={
          this.state.active === item ? "mr-2 mb-2 active" : "mr-2 mb-2"
        }
        onClick={() => this.handleClick(item)}
      >
        {item}
      </Button>
    ));

    const listPorfolio =
      Object.keys(search).length === 0
        ? porfolio.map(item => <PorfolioItem item={item} key={item.id} />)
        : search.map(item => <PorfolioItem item={item} key={item.id} />);
    return (
      <>
        <div className="header_porfolio">
          <div className="overlay" />
          <div className="porfolio_content">
            <h1 className="display-3 text-capitalize">hello :)</h1>
            <p className="lead text-capitalize">have a good day</p>
          </div>
        </div>
        <div className="porfolio_intro">
          <div className="porfolio_title text-center rounded text-white">
            <h1 className="display-4 text-capitalize">
              web developer portfolio
            </h1>
            <p className="lead">
              Below are the projects I did during self-learning and learning at
              the academy :
            </p>
            <p>
              From Web Components and UI/UX animations to React.JS, Redux. Check
              out my web software development portfolio projects.
            </p>
          </div>
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

const mapDispatchToProps = dispatch => {
  return {
    getListPorfolio: () => {
      dispatch(actions.getPorfolioRequest());
    },
    getData: value => {
      dispatch(actions.getData(value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
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
