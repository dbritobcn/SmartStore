import React from "react";
import {Breadcrumb} from "react-bootstrap";
import {Link, useMatches} from "react-router-dom";

export const Breadcrumbs = () => {
  let matches = useMatches();
  let crumbs = matches
    .filter((match) => {
      return Boolean(match.handle?.crumb)
    })
    .map((match) => match.handle.crumb(match.data));

  return (
    <Breadcrumb>
      <Breadcrumb.Item><small><Link to={'/'}>Home</Link></small></Breadcrumb.Item>
      <Breadcrumb.Item><small>Iphone 11</small></Breadcrumb.Item>
      {/*{crumbs.map((crumb, index) => (*/}
      {/*  <Breadcrumb.Item key={index}><small>{crumb}</small></Breadcrumb.Item>*/}
      {/*))}*/}
    </Breadcrumb>
  );
}
