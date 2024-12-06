/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('artists').del()
  await knex('artists').insert([
    {name: 'Kanye West', email: 'imadegraduation@gmail.com', password: 'password1234'},
    {name: 'Malcolm Todd', email: 'mactoddler45@outlook.com', password: 'bruhwtf7832'},
    {name: 'snuffles', email: 'snufflesnapper@outlook.com', password: '0ldf4rmer'}
  ]);
};
