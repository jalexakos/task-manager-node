const express = require('express');
require('./db/mongoose');

// Import routes
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

// Use routes
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const Task = require('./models/task');
// const User = require('./models/user');

// const main = async () => {
//     const task = await Task.findById('6021ca43906a194eb8288249')
//     await task.populate('owner').execPopulate()
//     console.log(task.owner)

//     const user = await User.findById('6021ca3c906a194eb8288246')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()