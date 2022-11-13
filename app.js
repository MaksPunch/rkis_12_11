const express = require('express')

const app = express();
const { faker } = require('@faker-js/faker');

function createRandomUser() {
  let User = [];
  Array.from({ length: 100 }).forEach( () => {
    User.push({
      fullName: faker.name.fullName(),
      adress: `г. ${faker.address.city()}, ${faker.address.streetAddress(true)}`,
      birthdate: faker.date.birthdate(),
      vehicle: faker.vehicle.vehicle(),
      phone: faker.phone.number('+7 ### ### ## ##')
    }); 
});
  return { "users": User };
}

app.use('/user', function (request, response) {
  response.status(200).type('text/plain')
  response.send(JSON.stringify(createRandomUser(), null, '\t'));
})

app.listen(3000, () => {
  console.log('server started')
})