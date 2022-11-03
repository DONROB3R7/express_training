const express = require('express');
const path = require('path');
const members = require('./Members');
const logger = require('./middleware/logger');

const app = express();




// Init middleware
app.use(logger);

// Gets All Members 
app.get('/api/members', (req,res) => {
    res.json(members);
})

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req,res) => {
//    res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

const PORT = process.env.PORT || 3000;


// Listen on port 3000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));