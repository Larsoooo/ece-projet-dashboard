const express = require ('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/teams'); // import the routes

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', routes); //to use the routes

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})


//establish connection to database
mongoose.connect('mongodb://127.0.0.1:27017/WorldCup', {
	useNewUrlParser: true, 
	useUnifiedTopology: true 
}).then(() => console.log("Connected to MongoDB")).catch(console.error);


 