import React from "react";
import {Breadcrumb} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";

export const Breadcrumbs = (props) => {
  const {productId} = useParams();

  const links = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Products',
      url: '/products',
    },
  ];

  if (productId) {
    links.push({
      title: props.title || 'product',
      url: `/products/${productId}`,
    });
  }

  return (
    <Breadcrumb>
      {links.map((link) => (
        <Breadcrumb.Item key={link.url} linkAs={Link} linkProps={{ to: link.url }}>
          <small>
            {link.title}
          </small>
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
}
