// function multiplyAll(arr) {
//   let product = 0;
//   // Змініть код лише під цим рядком
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       product += arr[i][j];
//     }
//     // Змініть код лише над цим рядком
//   }
//   return product;
// }
// console.log(
//   multiplyAll([
//     [1, 2],
//     [3, 4],
//     [5, 6, 7],
//   ])
// );

// Налаштування
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Змініть код лише під цим рядком
  let message = "";
  for (const contact of contacts) {
    if (contact.firstName === name && contact[prop]) {
      return contact[prop];
    } else if (contact.firstName === name && !contact[prop]) {
      return (message = "No such property");
    } else {
      message = "No such contact";
    }
  }
  return message;
  // Змініть код лише над цим рядком
}
console.log(lookUpProfile("Kristian", "lastName"));
console.log(lookUpProfile("Sherlock", "likes"));
console.log(lookUpProfile("Harry", "likes"));
console.log(lookUpProfile("Akira", "address"));
// lookUpProfile("Akira", "likes");
