const myName = "John";

if (myName === "John") {
  console.log("Hello!");
}

5 === 5;
5 == 5;
5 == "5";
5 !== 5;

// false, checked the type too
/// better use ===
5 === "5";
5 != "5";

"a" > "b"; // false

"cb" > "ab"; // true

5 >= 5; // true
3 <= 2; // false

// 5!<5 // SyntaxError

!(5 < 5); // true-

5 === 5 && 3 === 3; // true
5 === 5 && 2 === 3; // false
5 === 5 || 2 === 3; // true
5 === 6 || 2 === 3; // false

2 === 2 || (2 === 3 && 5 === 6); // true
// || -
