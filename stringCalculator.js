function add(numbers) {
    if (numbers === "") return 0;
  
    let delimiter = /,|\n/; // Default delimiters
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n");
      delimiter = new RegExp(parts[0].slice(2)); // Extract custom delimiter
      numbers = parts[1]; // Get the actual numbers
    }
  
    const numArray = numbers.split(delimiter).map(Number);
    const negatives = numArray.filter(num => num < 0);
  
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(", ")}`);
    }
  
    return numArray.reduce((sum, num) => sum + num, 0);
  }
  
  module.exports = add;