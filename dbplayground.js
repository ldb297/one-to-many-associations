//gain access to database 
const db = require('./models')

//lets make some users
// firstName: DataTypes.STRING,
// lastName: DataTypes.STRING,
// age: DataTypes.INTEGER,
// email: DataTypes.STRING

// db.user.create({
//     firstName: 'Leo',
//     lastName: 'Brooks',
//     age: 26,
//     email: 'sfwr@dev.co.jp'
// }).then(newUser=>{ // tacking a new pet on to the new user.
//     newUser.createPet({
//         name: 'Albert',
//         species: 'Turtle'
//     }).then(newPet=>{
//         console.log(newPet)
//     })
// })

// db.user.create({
//     firstName: 'James',
//     lastName: 'Sinkler',
//     age: 31,
//     email: 'code@vim.org'
// })
// .then(newUser=> {
//     // make a pet associated with this user
//     // createASSOCIATEDMODELNAME()
//     newUser.createPet({
//         name: 'Piper',
//         species: 'Terrier Mutt'
//     })
//     .then( newDog=> {
//         console.log(newDog)
//     })
// })

// db.user.create({
//     firstName: 'Brian',
//     lastName: 'Krabec',
//     age: 27,
//     email: 'bk@ga.org'
// })
// .then(newUser=> {
//     // make a pet associated with this user
//     newUser.createPet({
//         name: 'Crap',
//         species: 'Hermit Krab'
//     })
//     .then( newPet=> {
//         console.log(newPet)
//     })
// })

// db.user.create({
//     firstName: 'Nick',
//     lastName: 'Schmitt',
//     age: 29,
//     email: 'ns@ga.org'
// })
// .then(newUser=> {
//     // make a pet associated with this user
//     newUser.createPet({
//         name: 'Molly',
//         species: 'Dog'
//     })
//     .then(newPet=> {
//         console.log(newPet)
//     })
// })

//find particular user, then logs all pets associated with that user.

db.user.findOne({ where: {id: 1 }})
.then(user=>{
    user.createPet({
        name: 'Sawyer',
        species: 'Dog'
    })
    .then(newPet=>{
        console.log(newPet)
    })
})

db.user.findOne({ where: {id: 1}})
.then(user=>{
    user.getPets()
    .then(allPets=>{
        console.log(allPets)
    })
})