/*Generics:
 * Add flexibility to existing functions, types, etc •
 * Act like function parameters, but for types
 * Use angle bracket syntax (<>)
 */

const gameScores = [14, 21, 33, 42, 59];
const favoriteThings = [
  "raindrops on roses",
  "whiskers on kittens",
  "bright copper kettles",
  "warm woolen mittens",
];
const voters = [
  { name: "Alice", age: 42 },
  { name: "Bob", age: 77 },
];

// function getLastitem<PlaceHolderType> (array: PlaceHolderType[]) {
//     return array[array.length - 1];
// }

const getLastitem = <T>(array: T[]): T | undefined => {
  return array[array.length - 1];
};

console.log(getLastitem(gameScores));
console.log(getLastitem(favoriteThings));
console.log(getLastitem(voters));
