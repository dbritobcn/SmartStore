import React, {useEffect, useState} from "react";
import "./button-selector.scss";
import {ButtonGroup, ToggleButton} from "react-bootstrap";

export const ButtonSelector = (props) => {
  const [radioValue, setRadioValue] = useState(null);
  const {options, property} = props;

  useEffect(() => {
    if (options.length) setRadioValue(options[0].id);
    optionChange(options[0].id);
  }, [options]);

  const optionChange = (value) => {
    setRadioValue(value);
    props.optionChange(value);
  }

  return (
    <div className="button-selector mt-2 mb-5">
      <ButtonGroup className="w-100 mb-2" data-cy="buttonGroup">
        {options.map((radio, id) => (
          <ToggleButton
            key={id}
            id={`${property}-${id}`}
            className="button-selector__button"
            type="radio"
            variant="outline-dark"
            name={`${property}-radio`}
            value={radio.id}
            checked={radioValue === radio.id}
            onChange={(e) => optionChange(e.currentTarget.value)}
          >
            {radio.title}
            {radio.code && <span className="button-selector__color-indicator" style={{backgroundColor: radio.code}}></span>}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  );
}
