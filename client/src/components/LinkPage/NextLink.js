/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./LinkPage.scss";

function NextLink({ name, path, history }) {
  const onNextPage = path => {
    history.push(`/${path}`);
  };

  return (
    <>
      <a
        onClick={() => onNextPage(path)}
        className="porfolio_next d-none d-md-flex"
      >
        <span className="item_right">{name}</span>
        <i class="fa fa-angle-right" />
      </a>
    </>
  );
}

export default NextLink;
