const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celebrities');
const Celebrity = require('../model/celebrity');

const celebrities = [
  {
    name: 'Tom Cruise',
    occupation: 'Actor',
    catchPhrase: 'Scientology is Awesome'

  },
  {
    name: 'Denzel Washington',
    occupation: 'Actor',
    catchPhrase: 'Im a badass mofo'

  },
  {
    name: 'Steph Curry',
    occupation: 'Athlete',
    catchPhrase: 'Getting Buckets'
 
  }
];

Celebrity.create(celebrities, (err, responseFromdb) => {
  console.log("responseFromdb:", responseFromdb)
  if (err) {
    throw err;
  }

  responseFromdb.forEach(oneResponse => {
    console.log(oneResponse.name);
  });
  mongoose.connection.close();
});