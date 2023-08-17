const express = require("express");
const router = express.Router();
const Person = require("./Person");

//Get all Persons
router.get("/", (req, res) => {
  res.json(Person);
});

//Get one Persons
router.get("/:id", (req, res) => {
  const found = Person.some((person) => person.id === parseInt(req.params.id));

  if (found)
    res.json(Person.filter((person) => person.id === parseInt(req.params.id)));
  else
    res.status(400).json({ msg: `person with id ${req.params.id} not found` });
});

//Create one Persons
router.post("/", (req, res) => {
  const newPerson = {
    id: Person.length + 1,
    name: req.body.name,
    age: req.body.age,
    mobile: req.body.mobile,
  };

  if (!newPerson.name || !newPerson.age || !newPerson.mobile) {
    return res.status(400).json({ msg: "name, age, mobile is required" });
  }
  Person.push(newPerson);
  res.send(Person);
});

//Update one Persons
router.put("/:id", (req, res) => {
  const found = Person.some((person) => person.id === parseInt(req.params.id));

  if (found) {
    const updPerson = req.body;
    Person.forEach((person) => {
      if (person.id === parseInt(req.params.id)) {
        person.name = updPerson.name ? updPerson.name : person.name;
        person.age = updPerson.age ? updPerson.age : person.age;
        person.mobile = updPerson.mobile ? updPerson.mobile : person.mobile;

        res.json({ msg: "Person updated successfully", person });
      }
    });
  } else {
    res.status(400).json({ msg: `person with id ${req.params.id} not found` });
  }
});

//Delete one Persons
router.delete("/:id", (req, res) => {
  const found = Person.some((person) => person.id === parseInt(req.params.id));

  if (found) {
    const updPerson = req.body;
    Person.forEach((person) => {
      if (person.id === parseInt(req.params.id)) {
        Person.pop(person);

        res.json({ msg: "Person deleted successfully", Person });
      }
    });
  } else {
    res.status(400).json({ msg: `person with id ${req.params.id} not found` });
  }
});

module.exports = router;
