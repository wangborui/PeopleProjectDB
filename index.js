const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/personDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const fruitSchema = new mongoose.Schema({
   name: {
     type: String,
     required: '{PATH} is required!'
   },
   score: Number,
   review: String
 });

const Fruit = mongoose.model('Fruit', fruitSchema);
const Person = mongoose.model('Person', {
  name: {
    type: String,
    required: '{PATH} is required!'
  },
  age: Number,
  favoriteFruit: fruitSchema
});

const apple = new Fruit({
  name: 'apple',
  score: 5,
  review: "It is a nice fruit"
});

const pineapple = new Fruit({
  name: 'pineapple',
  score: 5,
  review: "It is a good Indian pineapple"
});

const person = new Person({
  name: 'whatever person',
  age: 29,
  favoriteFruit: pineapple
});

pineapple.save();
person.save();
// person.updateOne({name: 'Person Favorite Wang'}, {favoriteFruit: mango}, (err) => {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Successfully updated the one person");
//   }
// });

// person.save().then(() => console.log('person saved!!!'));
// Person.updateOne({
//   _id: '5d792b2761a0ff14b80c66eb'
// }, {
//   name: 'USS Enterprise'
// }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Updated Successfully!!");
//   }
// });

// Person.deleteOne({
//   _id: '5d792b2761a0ff14b80c66eb'
// },
// (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Deleted Successfully!!");
//   }
// });

// Person.deleteMany({
//   name: 'New Wang'
// },
// (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Deleted Successfully!!");
//   }
// });
const person1 = new Person({
  name: 'Yue Wang',
  age: 33
});

const person2 = new Person({
  name: 'Somthing Wang',
  age: 23
});

const person3 = new Person({
  name: 'Borui Wang afafad',
  age: 123131
});

// Person.insertMany([person1, person2, person3], (err) => {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all people into db");
//   }
// });

Person.find((err, docs) => {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();
    docs.forEach((person) => {
      console.log(person.name);
    })
  }
})
