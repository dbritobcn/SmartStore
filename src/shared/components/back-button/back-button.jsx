import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";

export const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Button variant="outline-dark"
            size="sm"
            onClick={() => {
              const whereToNavigate = location.key === 'default' ? '/products' : -1;
              navigate(whereToNavigate);
            }}
            data-cy="backButton">Back</Button>
  )
}
