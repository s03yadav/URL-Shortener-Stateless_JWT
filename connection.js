const mongoose = require('mongoose');

async function connectDB (url){
    return await mongoose.connect(url)
    .then(console.log(`MongoDB Connected !`))
};

module.exports = {
    connectDB
}