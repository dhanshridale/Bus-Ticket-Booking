const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json()); // To parse JSON request body
const cors = require('cors');
app.use(cors());

const USERS_FILE_PATH = '../database/user.json'; // Ensure this path is correct!

// Helper function to get users
const getUsers = () => {
  try {
    const data = fs.readFileSync(USERS_FILE_PATH, 'utf8');
    return JSON.parse(data); // Parse data from file
  } catch (err) {
    console.error('Error reading users file:', err);
    return []; // Return an empty array if there's an error
  }
};

// Helper function to save users
const saveUsers = (users) => {
  try {
    fs.writeFileSync(USERS_FILE_PATH, JSON.stringify(users, null, 2));
  } catch (err) {
    console.error('Error saving users file:', err);
  }
};

// Register route
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const users = getUsers();
  const userExists = users.find((user) => user.username === username);

  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Add new user to the users array
  users.push({ username, email, password });
  saveUsers(users); // Save to the JSON file

  res.status(201).json({ message: "User registered successfully" });
});

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }
  
    const users = getUsers();
    const user = users.find((user) => user.username === username && user.password === password);
  
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }
  
    res.status(200).json({ message: "Login successful", user });
  });
// Start the server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
