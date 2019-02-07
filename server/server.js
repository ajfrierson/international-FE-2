const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(CORS());

let users = [
  {
    id: '1',
    username: 'johndoe',
    password: 'admin'
  }
];

let students = [
  {
    id: '1',
    name: 'Aaron',
    status: 'student',
    age: '6',
    insuranceCardexpires: '54DSF5',
    birthcertificate: null,
    specialneeds: null,
    representative: 'Barry',
    contactinfo: '+123456789'
  },
  {
    id: '2',
    name: 'Cindy',
    status: 'student',
    age: '8',
    insuranceCardexpires: '54DSF5',
    birthcertificate: null,
    specialneeds: null,
    representative: 'Doug',
    contactinfo: '+123456789'
  },
  {
    id: '3',
    name: 'Ed',
    status: 'student',
    age: '2',
    insuranceCardexpires: '54DSF5',
    birthcertificate: null,
    specialneeds: null,
    representative: 'Finley',
    contactinfo: '+123456789'
  }
];

const generateUserID = (function() {
  let id = 1;
  return function incrementID() {
    return `${(id += 1)}`;
  };
})();

const generateStudentID = (function() {
  let id = 3;
  return function incrementID() {
    return `${(id += 1)}`;
  };
})();

app.get('/api/test/users', (req, res) => {
  res.status(200).json(users);
});

app.get('/api/test/students', (req, res) => {
  res.status(200).json(students);
});

app.post('/api/register', (req, res) => {
  const { username, password } = req.body;

  const userInfo = {
    id: generateUserID(),
    username,
    password
  };

  users = [...users, userInfo];

  res.status(201).json(users);
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  const foundUser = users.find(
    user => user.username === username && user.password === password
  );

  if (foundUser) {
    res.status(200).json({ msg: 'GUD LOGIN' });
  } else {
    res.status(401).json({ msg: 'BAD LOGIN' });
  }
});

app.post('/api/student', (req, res) => {
  const {
    name,
    status,
    age,
    insuranceCardexpires,
    birthcertificate,
    specialneeds,
    representative,
    contactinfo
  } = req.body;

  const studentInfo = {
    id: generateStudentID(),
    name,
    status,
    age,
    insuranceCardexpires,
    birthcertificate,
    specialneeds,
    representative,
    contactinfo
  };

  students = [...students, studentInfo];

  res.status(401).json(students);
});

app.get('/api/students', (req, res) => {
  res
    .status(200)
    .json(students.map(student => ({ id: student.id, name: student.name })));
});

app.get('/api/students/:id', (req, res) => {
  const id = req.params.id;

  const foundStudent = students.find(student => student.id === id);

  if (foundStudent) {
    res.status(200).json(foundStudent);
  } else {
    res.status(404).json({ msg: 'no such student ID' });
  }
});

app.delete('/api/students/:id', (req, res) => {
  const id = req.params.id;

  const foundStudent = students.find(student => student.id === id);

  if (foundStudent) {
    students = students.filter(student => student.id !== id);
    res.status(200).json(students);
  } else {
    res.status(404).json({ msg: 'tried to delete non-existent student ID ' + id });
  }
});

app.put('/api/students/:id', (req, res) => {
  const id = req.params.id;

  const {
    name,
    status,
    age,
    insuranceCardexpires,
    birthcertificate,
    specialneeds,
    representative,
    contactinfo
  } = req.body;

  let foundStudent = students.find(student => student.id === id);

  if (foundStudent) {
    name && (foundStudent.name = name);
    status && (foundStudent.status = status);
    age && (foundStudent.age = age);
    insuranceCardexpires &&
      (foundStudent.insuranceCardexpires = insuranceCardexpires);
    birthcertificate && (foundStudent.birthcertificate = birthcertificate);
    specialneeds && (foundStudent.specialneeds = specialneeds);
    representative && (foundStudent.representative = representative);
    contactinfo && (foundStudent.contactinfo = contactinfo);

    res.status(200).json(foundStudent);
  } else {
    res.status(404).json({ msg: 'tried to update non-existent student ID' });
  }
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
