/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('albums').del()
  await knex('albums').insert([
    {album_name: 'Graduation', artist: 'Kanye West', image: 'https://m.media-amazon.com/images/I/71pxGj4RoVS.jpg', price: 10, type: 1, info: 'Kanyes greatest album hands down do not argue with me on this i will win', release: 20231225, label: 'Roc-A-Fella Records', artists_id: 1},
    {album_name: 'Sweet Boy', artist: 'Malcolm Todd', image: 'https://t2.genius.com/unsafe/1250x0/https%3A%2F%2Fimages.genius.com%2F99479c1f31372181a3943d3eacc98f5c.1000x1000x1.png', price: 12, type: 1, info: 'Including a new arrangement of tracks filled with some of his most beloved tracks, Sweet Boy releases as a full album with both of the tracklists of the previous parts and the last singles.', release: 20240404, label: 'Columbia Records', artists_id: 2},
    {album_name: 'Ye', artist: 'Kanye West', image: 'https://t2.genius.com/unsafe/1315x0/https%3A%2F%2Fimages.genius.com%2F521b925045ca5be201953c54501f3b6a.640x640x1.png', price: 10, type: 1, info: 'ayo ayo ayo im kanye', release: 20231225, label: 'Roc-A-Fella Records', artists_id: 1},
    {album_name: 'i dont wanna', artist: 'snuffles', image: 'https://f4.bcbits.com/img/a4240305117_10.jpg', price: 5, type: 2, info: 'this is a track inspired by the style of too late that i made back in 2021. enjoy!! :D', release: 20241018, label: 'snuffles', artists_id: 3},
    {album_name: 'Forgive Me Please', artist: 'snuffles', image: 'https://f4.bcbits.com/img/a1602628569_10.jpg', price: 5, type: 2, info: 'plz enjoy da music', release: 20241018, label: 'snuffles', artists_id: 3}
  ]);
};
