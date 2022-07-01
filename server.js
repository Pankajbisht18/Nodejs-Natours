const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');


const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
// const localDB = process.env.DATABASE_LOCAL

//connect to the database
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
}).then(() => console.log('DB Connection successful!'))

//create server
const port = process.env.PORT || 3000
app.listen(port, '127.0.0.1', () => {
    console.log(`App running on port 127.0.0.1:${port}`)
})