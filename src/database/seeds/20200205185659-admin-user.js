const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Receitas Foodfy',
          email: 'admin@foodfy.com',
          password: bcrypt.hashSync('Qwe123', 8),
          is_admin: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      'users',
      { email: 'admin@foodfy.com' },
      {}
    );
  },
};
