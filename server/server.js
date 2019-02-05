const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(CORS());

let users = [
  {
    id: '154939824611045457317',
    username: 'johndoe',
    password: 'admin'
  }
];

let students = [
  {
    id: '154940632879679410101',
    name: 'Aaron',
    status: 'student',
    age: 6,
    insuranceCard: '54DSF5',
    birthCertificateExpires: null,
    specialNeeds: null,
    representative: 'Barry',
    contactInfo: '+123456789'
  },
  {
    id: '154879679940632410101',
    name: 'Cindy',
    status: 'student',
    age: 8,
    insuranceCard: '54DSF5',
    birthCertificateExpires: null,
    specialNeeds: null,
    representative: 'Doug',
    contactInfo: '+123456789'
  },
  {
    id: '328796791549406410101',
    name: 'Ed',
    status: 'student',
    age: 2,
    insuranceCard: '54DSF5',
    birthCertificateExpires: null,
    specialNeeds: null,
    representative: 'Finley',
    contactInfo: '+123456789'
  }
];

const generateId = () =>
  `${Date.now()}${Math.floor(Math.random() * 100000000)}`;

app.get('/api', (req, res) => {
  res.status(200).json({ message: 'OK' });
});

app.get('/api/students', (req, res) => {
  res.status(200).json(students);
});

app.post('/api/students', (req, res) => {
  const {
    name,
    status,
    age,
    insuranceCard,
    birthCertificateExpires,
    specialNeeds,
    representative,
    contactInfo
  } = req.body;

  if (!name || !status || isNaN(age) || age < 0) {
    res.sendStatus(400);
  } else {
    const newStudent = {
      name,
      status,
      age,
      insuranceCard: insuranceCard || null,
      birthCertificateExpires: birthCertificateExpires || null,
      specialNeeds: specialNeeds || null,
      representative: representative || null,
      contactInfo: contactInfo || null
    };
    students = [...students, newStudent];
    res.status(201).json(newStudent);
  }
});

app.post('/api/users/login', (req, res) => {
  const { loginUsername, loginPassword } = req.body;

  if (!loginUsername || !loginPassword) {
    res.sendStatus(401);
  }

  const foundUser = users.find(
    user => user.username === loginUsername && user.password === loginPassword
  );

  if (foundUser) {
    res.status(200).json(foundUser.id);
  } else {
    res.sendStatus(403);
  }
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
