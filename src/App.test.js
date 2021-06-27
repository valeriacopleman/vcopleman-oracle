// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App debug />);

    expect(component).toMatchSnapshot();
  });

  it("should render PieChart", () => {
    const com = shallow(<App PieChart />);

    expect(com).toMatchSnapshot();
  });
});
