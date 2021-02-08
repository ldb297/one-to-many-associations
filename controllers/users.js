const express = require('express')
// router will act like app has for us
const router = express.Router()
// bring in db
const db = require('../models')

//control our routes
router.get('/', (req, res)=> {
// get all user and renders page to show them
db.user.findAll()
.then( allUsers=>{
    res.render('allUsers', {allUsers})
})
})

//this will be the user show page
router.get('/:id', (req,res)=>{
    //this will be a show page for one user
    db.user.findOne({ 
        where: { 
            id: req.params.id
        },
        include: [db.pet] //can include multiple things in this array
    })
    .then(user=>{
        console.log(user.pets)
        res.render('userShow', {user})
    })
    //we will have form to make new animal
})

router.post('/:id/addPet', (req,res)=>{ //this utilized the form inputs
    db.user.findOne({ where: {id: req.params.id }})
    .then(user=>{
        user.createPet({
            name: req.body.name,
            species: req.body.species
        })
    .then((pet)=>{
        console.log(pet)
        res.redirect(`/users/${req.params.id}`)
        })
    })
})


// export the router to have access to it
module.exports = router