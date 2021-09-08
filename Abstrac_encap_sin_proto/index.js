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
  return {
    name,
    email,
    age,
    approvedCourse,
    learningPaths,
    socialMedia: {
      twitter,
      linkedin,
      instagram,
    },
  };
}

const Reynaldo = createStudent({
  name: "Reynaldo",
  email: "reynaldomoreno173@gmail.com",
});
