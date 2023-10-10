'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Teas',
      [
        {
          type: 'Императорский Лун Цзин',
          location: '30.274085, 120.155070', // Ханчжоу, Китай
          image: 'placeholder_image_1',
          description: 'Высокогорный зеленый чай с легким фруктовым ароматом.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Цейлонский Величественный',
          location: '6.927079, 79.861244', // Коломбо, Шри-Ланка
          image: 'placeholder_image_2',
          description: 'Черный чай с насыщенным вкусом и цитрусовыми нотками.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Дарджилинг Первого Сбора',
          location: '27.175015, 78.042155', // Агра, Индия
          image: 'placeholder_image_3',
          description: 'Легкий и ароматный чай с нотками мускатного ореха.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Тайгуаньинь из Аньши',
          location: '37.774929, -122.419416', // Сан-Франциско, США
          image: 'placeholder_image_4',
          description: 'Улун с выраженным цветочным ароматом и кремовым послевкусием.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Мэндон Хуан Жа',
          location: '39.904200, 116.407396', // Пекин, Китай
          image: 'placeholder_image_5',
          description: 'Жёлтый чай с мягким вкусом и легкой карамельной сладостью.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Шу Пуэр Специального Созревания',
          location: '51.507351, -0.127758', // Лондон, Великобритания
          image: 'placeholder_image_6',
          description: 'Зрелый пуэр с глубоким, землянистым вкусом.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Аргентинский Мате Ла Мерсед',
          location: '-34.603722, -58.381592', // Буэнос-Айрес, Аргентина
          image: 'placeholder_image_7',
          description: 'Мате с тонкими нотками табака и древесины.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Южноафриканский Редбуш Ванильный',
          location: '-33.918861, 18.423300', // Кейптаун, ЮАР
          image: 'placeholder_image_8',
          description: 'Безкофеиновый ройбуш с натуральным ванильным ароматом.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Чабрецовый Травяной Луг',
          location: '40.712776, -74.005974', // Нью-Йорк, США
          image: 'placeholder_image_9',
          description: 'Сбор трав с душистым ароматом чабреца и лаванды.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Масала Чай Специального Бленда',
          location: '28.613939, 77.209023', // Дели, Индия
          image: 'placeholder_image_10',
          description: 'Крепкий чай с богатой пряной композицией.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Teas', null, {});
  },
};
