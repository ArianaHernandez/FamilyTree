// This is the class and constructor used to create an object with a person's information.
class PersonInfo {
  constructor(id, gender, parents, children, siblings, spouses, bio) {
    this.id = id;
    this.gender = gender;

    this.parents = [];
    for (const parent of parents) {
      this.parents.push({ id: parent });
    }

    this.children = [];
    for (const child of children) {
      this.children.push({ id: child });
    }

    this.siblings = [];
    for (const sibling of siblings) {
      this.siblings.push({ id: sibling });
    }

    this.spouses = [];
    for (const spouse of spouses) {
      this.spouses.push({ id: spouse });
    }

    this.bio = bio;
  }
}

let data = [
  // This is the object that represents you
  new PersonInfo("Izzy", "female", ["Alexander", "Cloe"], [], ["Isodora", "Alexander II"], [], "This is me!"),

  // These two objects are your parents
  new PersonInfo("Alexander", "male", [], ["Izzy", "Isodora","Alexander II"], [], ["Cloe"], "I'm your dad."),

  new PersonInfo("Cloe", "female", [], ["Izzy", "Isodora","Alexander II"], [], ["Alexander"], "I'm your mom."),

  // These objects are your siblings
  new PersonInfo("Isodora", "female", ["Alexander", "Cloe"], [], ["Izzy", "Alexander II"], [], "I'm your sister."),
    new PersonInfo("Alexander II", "male", ["Alexander", "Cloe"], [], ["Izzy", "Isodora"], [], "I'm your brother.")
];

export default data;
