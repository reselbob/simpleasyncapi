const faker = require('faker');
const { v4: uuidv4 } = require('uuid');

const getRandomMessageNeededSync = () => {
    return {
      id: uuidv4(),
      sender: faker.name.findName(),
      target: {
        recipient: faker.name.findName(),
        identifier: faker.phone.phoneNumber(),
        carrierType: "SMS"
      },
      sentAt: "2021-03-12T17:23:12.000Z"
    }
  }
  
  const getRandomMessageSentSync = () => {
    return {
      id: uuidv4(),
      sender: faker.name.findName(),
      target: {
        recipient: faker.name.findName(),
        identifier: faker.phone.phoneNumber(),
        carrierType: "SMS",
        deliveredAt: new Date().now()
      },
      wisesaying: "A stitch in time saves nine",
      sentAt: "2021-03-12T17:23:12.000Z"
    }
  }

  module.exports = {getRandomMessageNeededSync, getRandomMessageSentSync }