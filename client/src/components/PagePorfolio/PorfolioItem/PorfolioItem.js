import React, { Component } from "react";
import "./PorfolioItem.scss";
import { Link } from "react-router-dom";

class PorfolioItem extends Component {
  render() {
    const { item } = this.props;

    const technical = item.technical.map(item => (
      <p class="badge badge-danger">{item}</p>
    ));
    return (
      <>
        <div class="col-md-6 mb-4 card_item">
          <Link to={`porfolio/${item.id}`} className="card_img">
            <div className="card_title">{item.name}</div>
            <img src={item.image} alt="a" className="w-100 img-fluid" />
            <div className="card_text">{technical}</div>
          </Link>
        </div>
      </>
    );
  }
}

export default PorfolioItem;
