class StringCalculator {
    add(numbers) {
      // If the string is empty, return 0
      if (numbers === "") {
        return 0;
      }
  
      let delimiter = /,|\n/; 
  
      
      if (numbers.startsWith("//")) {
        const delimiterEndIndex = numbers.indexOf("\n");
        delimiter = new RegExp(numbers.substring(2, delimiterEndIndex));
        numbers = numbers.substring(delimiterEndIndex + 1); // Remove the delimiter definition part from the string
      }
  
    
      const numberArray = numbers.split(delimiter);
      
      let sum = 0;
      let negatives = [];
  
      for (let num of numberArray) {
        //  string to integer
        let parsedNumber = parseInt(num, 10);
  
        if (!isNaN(parsedNumber)) {
          // Check for negative numbers
          if (parsedNumber < 0) {
            negatives.push(parsedNumber);
          } else {
            sum += parsedNumber;
          }
        }
      }
  
      // exception if negative numbers are found
      if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(", ")}`);
      }
  
      return sum;
    }
  }
  
 
  const calculator = new StringCalculator();
  
  console.log(calculator.add(""));           // Output: 0
  console.log(calculator.add("1"));          // Output: 1
  console.log(calculator.add("1,2,3"));      // Output: 6
  console.log(calculator.add("1\n2,3"));     // Output: 6
  console.log(calculator.add("//;\n1;2"));   // Output: 3
  console.log(calculator.add("//|\n1|2|3")); // Output: 6
  