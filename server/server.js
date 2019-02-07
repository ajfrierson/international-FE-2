const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(CORS());

let users = [
  {
    id: 1,
    username: 'johndoe',
    password: 'admin'
  }
];

let students = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
  const id = 1;
  return function incrementID() {
    return (id += 1);
  };
})();

const generateStudentID = (function() {
  const id = 3;
  return function incrementID() {
    return (id += 1);
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
    name,
    status,
    age,
    insuranceCardexpires,
    birthcertificate,
    specialneeds,
    representative,
    contactinfo
  };

  res.status(401).json(students);
});

app.get('/api/students', (req, res) => {
  res
    .status(200)
    .json(students.map(student => ({ id: student.id, name: student.name })));
});

app.get('/api/student/:id', (req, res) => {
  const id = req.params.id;

  const foundStudent = students.find(student => student.id === id);

  if (foundStudent) {
    res.status(200).json(foundStudent);
  } else {
    res.status(404).json({ msg: 'no such student ID' });
  }
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
