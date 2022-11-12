const express = require('express')

const app = express();
const { faker } = require('@faker-js/faker');
faker.locale = 'ru';
let User = [];

function createRandomUser() {
  return {
    fullName: faker.name.fullName(),
    adress: faker.address.streetAddress(true),
    birthdate: faker.date.birthdate(),
    vehicle: faker.vehicle.vehicle(),
    phone: faker.phone.number('+7 ### ### ## ##')
  }
}

Array.from({ length: 100 }).forEach(() => {
  User.push(createRandomUser());
});

app.use('/user', function (request, response) {
  response.json(User);
})

app.listen(3000, () => {
  console.log('server started')
})

