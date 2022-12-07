import React from "react";
import {Breadcrumb} from "react-bootstrap";
import {Link} from "react-router-dom";

export const Breadcrumbs = () => (
  <Breadcrumb>
    <Breadcrumb.Item><small><Link to={'/'}>Home</Link></small></Breadcrumb.Item>
    <Breadcrumb.Item><small>Iphone 11</small></Breadcrumb.Item>
  </Breadcrumb>
)
