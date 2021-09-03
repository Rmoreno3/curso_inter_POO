const juan = {
  name: "Juan",
  age: 18,
  approvedCurse: ["Curso 1"],
  addCourse(newCourse) {
    this.approvedCurse.push(newCourse);
  },
};

// console.log(Object.keys(juan));
// console.log(Object.getOwnPropertyNames(juan));
// console.log(Object.entries(juan));

// Object.defineProperty(juan, "navigator", {
//   value: "Chrome",
//   enumerable: false,
//   writable: true,
//   configurable: true,
// });

// Object.defineProperty(juan, "editor", {
//   value: "VSCode",
//   enumerable: true,
//   writable: false,
//   configurable: true,
// });

// Object.defineProperty(juan, "terminal", {
//   value: "Bash",
//   enumerable: true,
//   writable: false,
//   configurable: false,
// });

// Object.defineProperty(juan, "pruebaNasa", {
//   value: "extraterrestres",
//   enumerable: false,
//   writable: false,
//   configurable: false,
// });

Object.seal(juan);
// Object.freeze(juan);

console.log(Object.getOwnPropertyDescriptors(juan));
