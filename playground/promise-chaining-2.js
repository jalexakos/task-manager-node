require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('601c5e0cb581c31230585dad').then((task) => {
//     console.log('Deleted task:', task)
//     return Task.countDocuments({ completed: false })
// }).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('601c50e9be0e5529700770ac').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})