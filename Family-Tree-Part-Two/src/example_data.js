// This is the class and constructor used to create an object with a person's information.
class PersonInfo {
  constructor(id, gender, parents, children, siblings, spouses, bio, image) {
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
    this.image=image;
  }
}

let data = [
  // This is the object that represents you
  new PersonInfo("Izzy", "female", ["Alexander", "Cloe"], [], ["Isodora", "Alexander II"], [], "Age:17, Species:Vampire, Personality:Snob/Bookworm","https://drive.google.com/uc?export=download&id=1IY1HT-JBl2RSDo5BBeYAhCGxFJjBjj_G"),

  // These two objects are your parents
  new PersonInfo("Alexander", "male", [], ["Izzy", "Isodora","Alexander II"], [], ["Cloe"], "Age:333, Species:Vampire, Personality:Childish/Creative/Nerdy","https://drive.google.com/uc?export=download&id=178QlUBkaCHpdt6E8mzS_2O29rTp1I0YG"),

  new PersonInfo("Cloe", "female", [], ["Izzy", "Isodora","Alexander II"], [], ["Alexander"], "Age:326, Species:Mermaid, Personality:Nerdy/Good/Materialistic","https://drive.google.com/uc?export=download&id=1PV5wQ1jw3Lg89jWeVEK8BwagktbJOpb-"),

  // These objects are your siblings
  new PersonInfo("Isodora", "female", ["Alexander", "Cloe"], [], ["Izzy", "Alexander II"], [], "Age:4, Species:Alien, Personality:Charmer","https://drive.google.com/uc?export=download&id=1JUd9W6BKj6LzzEdyDbOu6Z-RI0BvXoq_"),
    new PersonInfo("Alexander II", "male", ["Alexander", "Cloe"], [], ["Izzy", "Isodora"], [], "Age:11, Species:Mermaid, Personality:Bookworm","https://drive.google.com/uc?export=download&id=1VsxUUJj5cmFI8Kv8kloD7yac6XBNtMUC")
];

export default data;
