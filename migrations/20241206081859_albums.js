/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('albums', (table) => {
        table.increments('id'),
        table.string('album_name'),
        table.string('artist'),
        table.string('image'),
        table.integer('price'),
        table.integer('type'),
        table.string('info'),
        table.date('release'),
        table.string('label'),
        table.integer('artists_id'),
        table.foreign('artists_id').references('artists.id').onDelete('CASCADE')
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('albums', table => {
        table.dropForeign('tracks');
    })
    .then(function() {
        return knex.schema.dropTableIfExists('albums')
    });
};
