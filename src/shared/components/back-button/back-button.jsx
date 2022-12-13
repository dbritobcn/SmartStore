import React from "react";
import {useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button variant="outline-dark"
            size="sm"
            onClick={() => navigate(-1)}
            data-cy="backButton">Back</Button>
  )
}
