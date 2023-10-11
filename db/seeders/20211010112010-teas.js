'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Teas',
      [
        {
          type: 'Императорский Лун Цзин',
          shirota: '30.274085,',
          dolgota: '120.155070',
          image: 'placeholder_image_1',
          description: 'Высокогорный зеленый чай с легким фруктовым ароматом.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Цейлонский Величественный',
          shirota: '6.927079,',
          dolgota: '79.861244', // Коломбо, Шри-Ланка
          image: 'placeholder_image_2',
          description: 'Черный чай с насыщенным вкусом и цитрусовыми нотками.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Дарджилинг Первого Сбора',
          shirota: '27.175015',
          dolgota: '78.042155', // Агра, Индия
          image: 'placeholder_image_3',
          description: 'Легкий и ароматный чай с нотками мускатного ореха.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Тайгуаньинь из Аньши',
          shirota: '37.774929',
          dolgota: '-122.419416', // Сан-Франциско, США
          image: 'placeholder_image_4',
          description: 'Улун с выраженным цветочным ароматом и кремовым послевкусием.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Мэндон Хуан Жа',
          shirota: '39.904200',
          dolgota: '116.407396', // Пекин, Китай
          image: 'placeholder_image_5',
          description: 'Жёлтый чай с мягким вкусом и легкой карамельной сладостью.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Шу Пуэр Специального Созревания',
          shirota: '51.507351',
          dolgota: '-0.127758', // Лондон, Великобритания
          image: 'placeholder_image_6',
          description: 'Зрелый пуэр с глубоким, землянистым вкусом.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Аргентинский Мате Ла Мерсед',
          shirota: '-34.603722',
          dolgota: '-58.381592', // Буэнос-Айрес, Аргентина
          image: 'placeholder_image_7',
          description: 'Мате с тонкими нотками табака и древесины.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Южноафриканский Редбуш Ванильный',
          shirota: '-33.918861',
          dolgota: '18.423300', // Кейптаун, ЮАР
          image: 'placeholder_image_8',
          description: 'Безкофеиновый ройбуш с натуральным ванильным ароматом.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Чабрецовый Травяной Луг',
          shirota: '40.712776',
          dolgota: '-74.005974', // Нью-Йорк, США
          image: 'placeholder_image_9',
          description: 'Сбор трав с душистым ароматом чабреца и лаванды.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Масала Чай Специального Бленда',
          shirota: '28.613939',
          dolgota: '77.209023', // Дели, Индия
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
