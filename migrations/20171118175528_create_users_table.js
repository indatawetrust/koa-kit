'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(t) {
    t.increments('id').unsigned().primary();
    t.dateTime('createdAt').notNull();
    t.dateTime('updatedAt').nullable();
    t.dateTime('deletedAt').nullable();
    t.string('username').notNull();
    t.string('password').notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
