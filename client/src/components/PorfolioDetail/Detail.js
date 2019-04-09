/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./Detail.scss";
import { connect } from "react-redux";
import { getItemRequest } from "../../actions/profile";

class Detail extends Component {
  onPrevPage = () => {
    const { history } = this.props;
    history.goBack();
  };
  onNextPage = () => {
    const { history } = this.props;
    history.push("/");
  };

  componentDidMount() {
    const { match } = this.props;
    window.scrollTo(0, 0);
    this.props.getItemRequest(match.params.id);
  }
  render() {
    const { getItem } = this.props;
    if (Object.keys(getItem).length === 0) return <div>loading...</div>;
    return (
      <>
        <a onClick={this.onPrevPage} className="porfolio_prev d-none d-md-flex">
          <i class="fa fa-angle-left" />
          <span className="item_left">Porfolio</span>
        </a>
        <a onClick={this.onNextPage} className="porfolio_next d-none d-md-flex">
          <span className="item_right">Home</span>
          <i class="fa fa-angle-right" />
        </a>

        <div className="container py-5 mt-5 section_padding">
          <h1 className="text-uppercase ">{getItem.name}</h1>
          <p className="lead">
            Sky Go Desktop react javascript web application build on top of the
            Electron framework.
          </p>
          <div className="detail_button">
            <div className="detail_button_visit">
              <a
                href={getItem.demo}
                target={"_blank"}
                className="btn btn-primary"
              >
                <span className="text-uppercase">Visit the Webiste</span>
              </a>
            </div>
            <div className="detail_button_social">
              <button className="btn btn_facebook">
                <i class="fa fa-facebook" aria-hidden="true" />
              </button>
              <button className="btn  btn_github ">
                <i class="fa fa-github" aria-hidden="true" />
              </button>
              <button className="btn  btn_linkedin ">
                <i class="fa fa-linkedin" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="detail_img py-4">
            <img src={getItem.img} alt="a" />
          </div>

          <div className="detail_about py-4">
            <h1>About this project</h1>
            <p className="lead">{getItem.about}</p>
          </div>

          <div className="detail_tech py-4">
            <h1>Technical Sheet</h1>
            <p className="lead">
              Code technologies I got involved with while working on this
              project.
            </p>
          </div>
          <ul>
            {getItem.tech.map(item => (
              <li>{item}</li>
            ))}
          </ul>
          <div className="detail_source">
            <h1>Resources</h1>
            <p className="lead">
              Github
              <a href={getItem.src} target={"_blank"}>
                github.com
              </a>
            </p>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    getItem: state.porfolio.item
  };
};

export default connect(
  mapStateToProps,
  { getItemRequest }
)(Detail);
