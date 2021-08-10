import { isTextPalindrom } from "../palindrom";

type TestCaseType = {
  word: string;
  isPalindrom: boolean;
};

const testCases: Array<TestCaseType> = [
  {
    word: "amma",
    isPalindrom: true
  },
  {
    word: "Noon",
    isPalindrom: true
  },
  {
    word: "racecar",
    isPalindrom: true
  },
  {
    word: "Hello",
    isPalindrom: false
  },
  {
    word: "a",
    isPalindrom: true
  }
];

describe("Palindrom test", () => {
  test.each(testCases)("Word $word ", ({ word, isPalindrom }) => {
    expect(isTextPalindrom(word)).toBe(isPalindrom);
  });
});
