const add = require("./stringCalculator");

test("handles new lines as delimiters", () => {
    expect(add("1\n2,3")).toBe(6); // 1 + 2 + 3 = 6
  });
  
