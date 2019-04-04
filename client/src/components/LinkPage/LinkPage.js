/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./LinkPage.scss";
import NextLink from "./NextLink";

export const LinkPage = ({ name1, name2, path1, path2, history }) => {
  const onPrevPage = path1 => {
    history.push(`/${path1}`);
  };

  return (
    <>
      <a // eslint-disable-next-line
        onClick={() => onPrevPage(path1)}
        className="porfolio_prev d-none d-md-flex"
      >
        <i class="fa fa-angle-left" />
        <span className="item_left">{name1}</span>
      </a>
      <NextLink />
    </>
  );
};
