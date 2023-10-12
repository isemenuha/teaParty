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
          role: 'user',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Lady_Infusion',
          email: 'lady_infusion@example.com',
          password: 'Herbalicious',
          role: 'user',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'SippinSamurai',
          email: 'sippin.samurai@example.com',
          password: 'Matcha4Lyfe',
          role: 'user',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: '1',
          email: '1@1',
          password: '$2b$10$.Sre7q6AoDSyJjcq15zM..NpteAnt9S6hUN3YPkEaujsGklhk6bTO',
          role: 'admin',
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
