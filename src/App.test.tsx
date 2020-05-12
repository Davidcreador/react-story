import React from 'react';
import App from './App';
import { render } from "@testing-library/react";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));

describe("App Component", () => {
  it('renders without crashing', () => {
    const container = render(<App />);

    expect(container).toMatchSnapshot();
  });
})

