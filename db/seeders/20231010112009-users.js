'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'ЛюбительЧая21',
          email: 'tealover21@example.com',
          password: 'SteepMeBaby1',
          role: 'user',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'ВахтовикСевера',
          email: 'northguard@example.com',
          password: 'NorthernBrew',
          role: 'user',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'КриптоМаксим',
          email: 'cryptomax@example.com',
          password: 'CryptoTea',
          role: 'user',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'ИнвесторАлекс',
          email: 'investoralex@example.com',
          password: 'TeaGains',
          role: 'user',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'СреднестатИван',
          email: 'averagesergey@example.com',
          password: 'JustTea4Me',
          role: 'user',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'ЗанятаяМама',
          email: 'busymom@example.com',
          password: 'Tea4Family',
          role: 'user',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'ПрограммистИгорь',
          email: 'coderigor@example.com',
          password: 'CodeAndTea',
          role: 'user',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'ИсторикМария',
          email: 'historymaria@example.com',
          password: 'HistoryInACup',
          role: 'user',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'СтудентНикита',
          email: 'studentnick@example.com',
          password: 'StudyAndTea',
          role: 'user',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Администратор',
          email: 'admin@example.com',
          password: '$2b$10$.Sre7q6AoDSyJjcq15zM..NpteAnt9S6hUN3YPkEaujsGklhk6bTO',
          role: 'admin',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'ArtisticSoul',
          email: 'artistic.soul@email.com',
          password: 'PaletteLove',
          role: 'user',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'ВахтовикСергей',
          email: 'vaxtoviksergey@example.com',
          password: 'Vaxta4Life',
          role: 'user',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'ПрограммистПетр',
          email: 'programmerpetr@example.com',
          password: 'PetrCode',
          role: 'user',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'ШефПоварЕлена',
          email: 'chefelena@example.com',
          password: 'DeliciousTea',
          role: 'user',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'ФитнесИнструктор',
          email: 'fitnessinstructor@example.com',
          password: 'WorkoutTea',
          role: 'user',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'СтроительВасилий',
          email: 'builder.vasily@example.com',
          password: 'BuildAndTea',
          role: 'user',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'МузыкантОлег',
          email: 'musician.oleg@example.com',
          password: 'MelodyAndTea',
          role: 'user',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'EngineerEmily',
          email: 'engineeremily@example.com',
          password: 'StableStructures',
          role: 'user',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'ChefCook',
          email: 'chefcook@example.com',
          password: 'KitchenMaster',
          role: 'user',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'TravelGuru',
          email: 'travelguru@example.com',
          password: 'SeeTheWorld',
          role: 'user',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'MusicFan',
          email: 'musicfan@example.com',
          password: 'RockAndRoll',
          role: 'user',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'EcoFriendly',
          email: 'ecofriendly@example.com',
          password: 'GreenLife',
          role: 'user',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'AnimalLover',
          email: 'animallover@example.com',
          password: 'PetsForever',
          role: 'user',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'GameMaster',
          email: 'gamemaster@example.com',
          password: 'LevelUp',
          role: 'user',
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
