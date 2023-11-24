const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());
app.use(express.json());

try {
    mongoose.connect('mongodb+srv://task3r:S4KZUigH$WPwuiW@servertask.8ujg0da.mongodb.net/');
}
catch(err) {
    console.log(err);
}

const BoardSchema = new mongoose.Schema({
    id:String,
    dueDate: Date,
    creationDate: Date,
    name: String,
    description: String
});
const TaskSchema = new mongoose.Schema ({
    id:String,
    dueDate: Date,
    creationDate: Date,
    name: String,
    description: String,
    board_id: String
});

const BoardModel = mongoose.model("boards", BoardSchema);
const TaskModel = mongoose.model("tasks", TaskSchema);

app.get('/boards', (req, res) => {
    res.json('test ok');
});

app.listen(4000, () => {
    console.log("Server started on door 4000.");
});