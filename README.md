# String Calculator TDD Kata

## Description

This is an implementation of the **String Calculator** based on the TDD (Test-Driven Development) Kata. The calculator is designed to handle a string of comma-separated numbers, sum them, and return the result. It also supports additional features such as handling custom delimiters, newlines as delimiters, and raising exceptions for negative numbers.

## Features

1. **Add Method**: 
   - The `add` method takes a string of numbers and returns their sum.
   - Supports an arbitrary number of numbers.
   - Delimiters can be commas (`,`) or newlines (`\n`).

2. **Custom Delimiters**:
   - If a custom delimiter is specified in the format `//[delimiter]\n[numbers...]`, the add method uses the specified delimiter instead of commas or newlines.
   - Example: `//;\n1;2` will return `3`.

3. **Negative Numbers**:
   - If the string contains negative numbers, an exception is thrown with the message `negative numbers not allowed <list of negative numbers>`.

## Installation

To clone this repository, run:

```bash
git clone https://github.com/mspatil551/String-Calculator-TDD-Kata.git
