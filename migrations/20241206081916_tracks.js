/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('tracks', (table) => {
        table.increments('id'),
        table.string('song_name'),
        table.integer('explicit'),
        table.string('artist')
        table.string('featured')
        table.integer('album_id'),
        table.foreign('album_id').references('albums.id').onDelete('CASCADE')
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tracks')
};
