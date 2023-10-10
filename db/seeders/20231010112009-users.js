'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'ChaiMaster88',
          email: 'chai.master@example.com',
          password: 'SteepMeBaby1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Lady_Infusion',
          email: 'lady_infusion@example.com',
          password: 'Herbalicious',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'SippinSamurai',
          email: 'sippin.samurai@example.com',
          password: 'Matcha4Lyfe',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
