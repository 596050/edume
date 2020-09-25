var fs = require("fs");
var _ = require("lodash");

export const getCharacters = (num?: number) => {
  let characterSet: string[] = [];
  switch (num) {
    case 1: {
      characterSet = [".", ",", "!"];
      break;
    }
    case 2: {
      characterSet = ["a", "b", "c"];
      break;
    }
    case 3: {
      characterSet = ["d", "e", "f"];
      break;
    }
    case 4: {
      characterSet = ["g", "h", "i"];
      break;
    }
    case 5: {
      characterSet = ["j", "k", "l"];
      break;
    }
    case 6: {
      characterSet = ["m", "n", "o"];
      break;
    }
    case 7: {
      characterSet = ["p", "q", "r", "s"];
      break;
    }
    case 8: {
      characterSet = ["t", "u", "v"];
      break;
    }
    case 9: {
      characterSet = ["w", "x", "y", "z"];
      break;
    }
    case 0: {
      characterSet = [" "];
      break;
    }
    default: {
      characterSet = [];
    }
  }
  return characterSet;
};

const keypadPermuation = (numbers: number[]) => {
  let permutations: string[] = [...getCharacters(numbers.shift())];
  for (let i = 0; i < numbers.length; i++) {
    const outputs: string[] = [...permutations];
    permutations = [];
    const keypad_string = getCharacters(numbers[i]);
    for (const char of keypad_string) {
      let new_item: string[] = [];
      for (const output of outputs) {
        new_item.push(output + char);
      }
      permutations.push(...new_item);
    }
  }
  return permutations;
};

const keypadPermuations = keypadPermuation([2, 3]);

// console.log(keypadPermuations);
const findWords = (object: any, perms: string[], permutationIndex: number) => {
  let wordsObject: any = object;
  try {
    if (!wordsObject[perms[permutationIndex][0]]) {
      return false;
    }
    for (
      let charIndex = 0;
      charIndex < perms[permutationIndex].length;
      charIndex++
    ) {
      if (wordsObject[perms[permutationIndex][charIndex]]) {
        wordsObject = wordsObject[perms[permutationIndex][charIndex]];
      }
    }
  } catch (e) {
    console.error(e);
    return false;
  }
  return wordsObject;
};

fs.readFile("./temp/a.json", "utf8", function (err: any, data: string) {
  if (err) throw err;
  var obj: any = JSON.parse(data);
  let result: string[] = [];
  for (
    let permutationIndex = 0;
    permutationIndex < keypadPermuations.length;
    permutationIndex++
  ) {
    const words: string[] = flattenNestedObject(
      findWords(obj, keypadPermuations, permutationIndex)
    );

    if (words[0]) {
      result = result.concat(
        words.map((suffix: string) => {
          return keypadPermuations[permutationIndex] + suffix;
        })
      );
    }
  }
  console.log("findWords", result);
});

function flattenNestedObject(obj: any): any {
  if (typeof obj !== "object") {
    return [obj];
  }
  var result: any = [];
  if (obj.constructor === Array) {
    obj.map(function (item) {
      result = result.concat(flattenNestedObject(item));
    });
  } else {
    Object.keys(obj).map(function (key) {
      if (!_.isEqual(obj[key], {})) {
        var chunk = flattenNestedObject(obj[key]);
        chunk.map(function (item: any) {
          result.push(key + item);
        });
      } else {
        result.push(key);
      }
    });
  }
  return result;
}

// rate limiting and delaying
// use a generator for each
