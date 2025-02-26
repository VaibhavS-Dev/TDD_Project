const add = require("./stringCalculator");

test("supports custom delimiters", () => {
    expect(add("//;\n1;2")).toBe(3); // 1 + 2 = 3
  });
  
  
