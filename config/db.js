const mongoose = require('mongoose');
const config = require('config');
const database = config.get('mongoUri');

const connetToDB = async () => {
    try {
        await mongoose.connect(database, {
            useNewUrlParser:true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('MongoDB is Connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connetToDB;