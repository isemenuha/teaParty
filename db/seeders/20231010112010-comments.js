'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Comments',
      [
        {
          teaId: 1,
          userId: 1,
          text: 'Этот чай просто великолепен! Очень рекомендую.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          teaId: 1,
          userId: 2,
          text: 'Неплохой, но не мой вкус.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          teaId: 2,
          userId: 3,
          text: 'Сильный и ароматный. Именно то, что нужно для хорошего дня.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          teaId: 3,
          userId: 1,
          text: 'Лёгкий и ненавязчивый вкус. Хорош для утреннего чаепития.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          teaId: 4,
          userId: 2,
          text: 'Очень насыщенный аромат, почти как парфюм.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          teaId: 5,
          userId: 3,
          text: 'Интересный чай, но сложно назвать его моим фаворитом.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          teaId: 6,
          userId: 1,
          text: 'Отличный вариант для тех, кто любит плотные, землянистые вкусы.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          teaId: 7,
          userId: 2,
          text: 'Не для каждого, но если вы фанат мате, то это то, что нужно.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          teaId: 8,
          userId: 3,
          text: 'Идеальный чай перед сном, очень расслабляющий.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          teaId: 9,
          userId: 1,
          text: 'Прекрасная травяная смесь. Особенно хороша с медом.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Comments', null, {});
  },
};
