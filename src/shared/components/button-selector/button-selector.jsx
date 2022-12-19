import React, {useEffect, useState} from "react";
import "./button-selector.scss";
import {ButtonGroup, ToggleButton} from "react-bootstrap";

export const ButtonSelector = ({options, property, optionChange}) => {
  const [radioValue, setRadioValue] = useState(null);

  useEffect(() => {
    if (options.length) setRadioValue(options[0].id);
    optionChange(options[0].id);
  }, [options]);

  const handleOptionChange = (value) => {
    setRadioValue(value);
    optionChange(value);
  }

  return (
    <div className="button-selector mt-2 mb-5">
      <ButtonGroup className="w-100 mb-2" data-cy="buttonGroup">
        {options.map((radio, id) => (
          <ToggleButton
            key={id}
            id={`${property}-${id}`}
            data-testid={`${property}-${id}`}
            className="button-selector__button"
            type="radio"
            variant="outline-dark"
            name={`${property}-radio`}
            value={radio.id}
            checked={radioValue === radio.id}
            onChange={(e) => handleOptionChange(e.currentTarget.value)}
          >
            {radio.title}
            {radio.code && <span className="button-selector__color-indicator" style={{backgroundColor: radio.code}}></span>}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  );
}
