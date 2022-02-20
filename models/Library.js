const mongoose = require("mongoose");
const { Schema } = mongoose;


const LibrarySchema = new Schema({
    username: {
        type: String,
    },
});

const Library = mongoose.model("Library", LibrarySchema);
module.exports = Library;
