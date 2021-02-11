const express = require('express');
require('./db/mongoose');

// Import routes
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();

// Use routes
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

module.exports = app;