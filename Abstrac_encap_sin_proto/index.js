function isObject() {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function deepCopy(subject) {
  let copySubject;

  const subjectIsArray = isArray(subject);
  const subjectIsObject = isObject(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (key in subject) {
    const keyIsObject = isObject(subject[key]);

    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }

  return copySubject;
}

// const studentBase = {
//   name: undefined,
//   email: undefined,
//   age: undefined,
//   approvedCourse: undefined,
//   learningPaths: undefined,
//   socialMedia: {
//     twitter: undefined,
//     linkedin: undefined,
//     instagram: undefined,
//   },
// };

function requiredParam(param) {
  throw new Error(`${param} is required`);
}

function createStudent({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  approvedCourse = [],
  learningPaths = [],
  twitter,
  linkedin,
  instagram,
} = {}) {
  const private = {
    _name: name,
  };

  const public = {
    email,
    age,
    approvedCourse,
    learningPaths,
    socialMedia: {
      twitter,
      linkedin,
      instagram,
    },
    get name() {
      return private._name;
    },
    set name(newName) {
      newName.length !== 0
        ? (private._name = newName)
        : console.warn("Debes proporcionar un nombre valido");
    },
    // changeName(newName) {
    //   this.name = newName;
    // },
    // readName() {
    //   return private._name;
    // },
  };

  Object.defineProperty(public, "readName", {
    configurable: false,
    writable: false,
  });
  Object.defineProperty(public, "changeName", {
    configurable: false,
    writable: false,
  });

  return public;
}

const Reynaldo = createStudent({
  name: "Reynaldo",
  email: "reynaldomoreno173@gmail.com",
});
