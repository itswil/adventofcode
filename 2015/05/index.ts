const hasThreeVowelsMinimum = (str: string): boolean => {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (const char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count > 2 ? true : false;
};

const hasTwoConsecutiveLetters = (str: string): boolean => {
  return str.match(/(\w)\1/) ? true : false;
};

export const validateString = (str: string): boolean => {
  let isValid = true;

  if (
    str.includes("ab") ||
    str.includes("cd") ||
    str.includes("pq") ||
    str.includes("xy")
  ) {
    isValid = false;
  }

  if (!hasThreeVowelsMinimum(str)) {
    isValid = false;
  }

  if (!hasTwoConsecutiveLetters(str)) {
    isValid = false;
  }

  return isValid;
};

export const getNumberOfValidStrings = (input: string): number => {
  const strings = input.split("\n");
  let validStringCount = 0;

  for (const str of strings) {
    if (validateString(str)) {
      validStringCount++;
    }
  }

  return validStringCount;
};
