import React from "react";
import { create } from "react-test-renderer";

import { FormField } from "./FormField";

describe("FormField", () => {
  it("should be defined", () => {
    expect(FormField).toBeDefined();
  });
  it("should be a function", () => {
    expect(typeof FormField).toEqual("function");
  });
  describe("rendering", () => {
    it("renders a div", () => {
      expect(() => {
        create(<FormField label="test" />);
      }).toThrow();
    });
    it("renders a div with className", () => {
      const { root } = create(<FormField type="text" label="test" ><input /></FormField>);
      const divs = root.findAllByProps({ className: "form-group" })
      expect(divs.length).toBe(1);
      expect(divs[0].type).toEqual("div")
    });
  });
});
