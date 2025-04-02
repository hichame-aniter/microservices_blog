'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [{
      username: 'demo-username',
      email: 'demo@email.com',
      password: 'demo-password',
      bio: 'demo-bio',
      profilePicture: 'https://s3.amazonaws.com/bucketname/imagename.jpg',
      // createdAt: new Date(),
      // updatedAt: new Date(),
      },{
      username: 'demo2-username',
      email: 'demo2@email.com',
      password: 'demo2-password',
      bio: 'demo2-bio',
      profilePicture: 'https://s3.amazonaws.com/bucketname/imagename.jpg',
      }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
