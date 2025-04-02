'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {    
    // await queryInterface.createTable('users', { id: Sequelize.INTEGER });
    await queryInterface.sequelize.query(
    'CREATE OR REPLACE FUNCTION update_modified_column()'+
    ' RETURNS trigger' +
    ' LANGUAGE plpgsql' +
    ' AS $function$' +
    ' BEGIN' +
    ' NEW."updatedAt" = now();' +
    ' RETURN NEW;' +
    ' END;' +
    ' $function$;');

    await queryInterface.sequelize.query(
    'create trigger update_modified_time before update on public."Users" for each row execute function update_modified_column()');
    await queryInterface.sequelize.query(
      'create trigger update_modified_time before update on public."Posts" for each row execute function update_modified_column()');
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
