const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();




//  middleware
app.use(express.json());
app.use(express.urlencoded({extended: false }));


app.use('api/members', require('./routes/api/members'));


//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members api routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 3000;


// Listen on port 3000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
