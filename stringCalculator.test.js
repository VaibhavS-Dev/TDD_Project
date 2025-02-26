const add = require("./stringCalculator");

test("throws an error for negative numbers", () => {
    expect(() => add("1,-2,3,-4")).toThrow("negative numbers not allowed -2, -4");
  });