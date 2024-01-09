const mongoose = require('mongoose');

const connectionString = 
'';

const connectDB = (url) => {
    return mongoose
    .connect(url, {
        useNewUrlParser: true,
        // userCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    });

}

module.exports = connectDB;