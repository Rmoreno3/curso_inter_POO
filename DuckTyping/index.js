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

class SuperObject {
  static isObject(subject) {
    return typeof subject == "object";
  }

  static deepCopy(subject) {
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
}

function requiredParam(param) {
  throw new Error(`${param} is required`);
}

function LearningPath({ name = requiredParam("name"), courses = [] }) {
  this.name = name;
  this.courses = courses;

  // const private = {
  //   _name: name,
  //   _courses: courses,
  // };

  // const public = {
  //   get name() {
  //     return private._name;
  //   },
  //   set name(newName) {
  //     newName.length !== 0
  //       ? (private._name = newName)
  //       : console.warn("Debes proporcionar un nombre valido");
  //   },
  //   get courses() {
  //     return private._courses;
  //   },
  // };

  // return public;
}

function Student({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  approvedCourse = [],
  learningPaths = [],
  twitter,
  linkedin,
  instagram,
} = {}) {
  this.name = name;
  this.email = email;
  this.age = age;
  this.approvedCourse = approvedCourse;
  // this.learningPaths = learningPaths;
  this.socialMedia = {
    linkedin,
    instagram,
    twitter,
  };

  if (isArray(learningPaths)) {
    this.learningPaths = [];

    for (learningPathIndex in learningPaths) {
      if (learningPaths[learningPathIndex] instanceof LearningPath) {
        this.learningPaths.push(learningPaths[learningPathIndex]);
      }
    }
  }
  // const private = {
  //   _name: name,
  //   _learningPaths: learningPaths,
  // };
  // const public = {
  //   email,
  //   age,
  //   approvedCourse,
  //   socialMedia: {
  //     twitter,
  //     linkedin,
  //     instagram,
  //   },
  //   get name() {
  //     return private._name;
  //   },
  //   set name(newName) {
  //     newName.length !== 0
  //       ? (private._name = newName)
  //       : console.warn("Debes proporcionar un nombre valido");
  //   },
  //   get learningPaths() {
  //     return private._learningPaths;
  //   },
  //   set learningPaths(newLP) {
  //     if (!newLP.name) {
  //       console.warn("Tu LP no tiene name");
  //       return;
  //     }
  //     if (!newLP.courses) {
  //       console.warn("Tu LP no tiene courses");
  //       return;
  //     }
  //     if (!isArray(newLP.courses)) {
  //       console.warn("Tu LP no es una lista de cursos");
  //       return;
  //     }
  //     private._learningPaths.push(newLP);
  //   },
  // };
  // return public;
}

const escuelaWeb = new LearningPath({ name: "Escuela de js" });
const escuelaDataScience = new LearningPath({
  name: "Escuela de data science",
});

const Reynaldo = new Student({
  name: "Reynaldo",
  email: "reynaldomoreno173@gmail.com",
  learningPaths: [escuelaWeb, escuelaDataScience],
});
