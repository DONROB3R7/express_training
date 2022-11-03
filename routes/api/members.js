const express = require('express');
const router = express.Router();
const members = require('../../Members.js');

// Gets All Members 
router.get('/', (req,res) => {
    res.json(members);
})

// Get Single Members
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found){
        res.json(members.filter( member => member.id === parseInt(req.params.id)));
    }else{
        res.status(400).json({msg:`Member not found with this id ${req.params.id}`});
    }
});


// Create Member 
router.post('/', (req, res) => {
    const newMember = {
        id: Math.floor(Math.random() * 100),
        name:req.body.name,
        email:req.body.email,
        status: 'active'
    }
    if(!newMember.name || !newMember.email) {
        console.log("rex");
       return  res.status(400).json({msg: 'Please include a name and email'});
    }

    members.push(newMember);
    res.json(members);
});

module.exports = router;