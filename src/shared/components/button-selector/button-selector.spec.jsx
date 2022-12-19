import {cleanup, fireEvent, render, screen} from "@testing-library/react";
import {ButtonSelector} from "./button-selector";

const options = [
  {
    "id": "0001",
    "title": "64Gb"
  },
  {
    "id": "0002",
    "title": "128Gb"
  },
  {
    "id": "0003",
    "title": "256Gb"
  }
]

describe('Button selector', () => {
  afterEach(() => {
    cleanup();
  });

  it('should change the value on select an option', () => {
    let value;
    render(<ButtonSelector options={options}
                           optionChange={(v) => value = v}
                           property='test'></ButtonSelector>);
    expect(screen.getByTestId('test-0')).toBeInTheDocument();
    expect(value).toBe('0001');
    fireEvent.click(screen.getByTestId('test-1'));
    expect(value).toBe('0002');
    fireEvent.click(screen.getByTestId('test-0'));
    expect(value).toBe('0001');
  });
});
