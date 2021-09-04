const objeto1 = {
  a: "a",
  b: "b",
  c: {
    d: "d",
    e: "e",
  },
};

const stringifyObject = JSON.stringify(objeto1);
const objeto2 = JSON.parse(stringifyObject);

// for (prop in objeto1) {
//   objeto2[prop] = objeto1[prop];
// }

// const objeto3 = Object.assign({}, objeto1);
// const objeto4 = Object.create(objeto1);
