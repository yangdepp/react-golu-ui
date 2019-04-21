import renderer from "react-test-renderer";
import React from "react";
import Button from "../button/button";
describe("button tests", () => {
  it("是个button", () => {
    const json = renderer.create(<Button />).toJSON();
    expect(json).toMatchSnapshot();
  });
});
