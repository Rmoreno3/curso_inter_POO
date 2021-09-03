const juan = {
  name: "Juan",
  age: 18,
  approvedCurse: ["Curso 1"],
  addCourse(newCourse) {
    this.approvedCurse.push(newCourse);
  },
};

console.log(Object.keys(juan));
console.log(Object.getOwnPropertyNames(juan));
console.log(Object.entries(juan));
console.log(Object.getOwnPropertyDescriptors(juan));

Object.defineProperty(juan, "pruebaNASA", {
  value: "extraterrestre",
  enumerable: true,
  writable: true,
  configurable: true,
});
