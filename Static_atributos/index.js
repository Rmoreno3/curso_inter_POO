// Haciendo static para atributos y metodos
class Patito {
  static saludito = "Cuack!";
  static hacerSonidito() {
    return "cuack";
  }
}

console.log(Patito.saludito);
console.log(Patito.hacerSonidito());

// Metodos staticos del prototipo Object

const objetito = {
  name: "Reynaldo",
  email: "reynaldomoreno173@gmail.com",
  age: 22,
};

console.log(Object.keys(objetito));
console.log(Object.getOwnPropertyNames(objetito));
console.log(Object.entries(objetito));
console.log(Object.getOwnPropertyDescriptors(objetito));
