/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tracks').del()
  await knex('tracks').insert([

    {song_name: 'Good Morning', explicit: 1, featured: '', artist: 'Kanye West', album_id: 1},
    {song_name: 'Champion', explicit: 1, featured: '', artist: 'Kanye West', album_id: 1},
    {song_name: 'Stronger', explicit: 1, featured: '', artist: 'Kanye West', album_id: 1},
    {song_name: 'I Wonder', explicit: 1, featured: '', artist: 'Kanye West', album_id: 1},
    {song_name: 'Good Life', explicit: 1, featured: 'T-Pain', artist: 'Kanye West', album_id: 1},
    {song_name: 'Cant Tell Me Nothing', explicit: 1, featured: '', artist: 'Kanye West', album_id: 1},
    {song_name: 'Barry Bonds', explicit: 1, featured: 'Lil Wayne', artist: 'Kanye West', album_id: 1},
    {song_name: 'Drunk and Hot Girls', explicit: 1, featured: 'Mos Def', artist: 'Kanye West', album_id: 1},
    {song_name: 'Flashing Lights', explicit: 1, featured: '', artist: 'Kanye West', album_id: 1},
    {song_name: 'Everything I Am', explicit: 1, featured: 'DJ Premier', artist: 'Kanye West', album_id: 1},
    {song_name: 'The Glory', explicit: 1, featured: '', artist: 'Kanye West', album_id: 1},
    {song_name: 'Homecoming', explicit: 1, featured: 'Chris Martin', artist: 'Kanye West', album_id: 1},
    {song_name: 'Big Brother', explicit: 1, featured: '', artist: 'Kanye West', album_id: 1},
    {song_name: 'Good Night', explicit: 1, featured: 'Albe Back', artist: 'Kanye West', album_id: 1},

    {song_name: 'I Thought About Killing You', explicit: 1, featured: '', artist: 'Kanye West', album_id: 3},
    {song_name: 'Yikes', explicit: 1, featured: '', artist: 'Kanye West', album_id: 3},

    {song_name: 'Earrings', explicit: 0, featured: '', artist: 'Malcolm Todd', album_id: 2},
    {song_name: 'Roommates', explicit: 0, featured: '', artist: 'Malcolm Todd', album_id: 2},
    {song_name: 'On My Shoulder', explicit: 0, featured: '', artist: 'Malcolm Todd', album_id: 2},
    {song_name: 'Thailand', explicit: 1, featured: '', artist: 'Malcolm Todd', album_id: 2},
    {song_name: 'Ladygirl', explicit: 0, featured: '', artist: 'Malcolm Todd', album_id: 2},
    {song_name: 'Sweet Boy', explicit: 1, featured: '', artist: 'Malcolm Todd', album_id: 2},
    {song_name: 'Rodrick Rules', explicit: 1, featured: '', artist: 'Malcolm Todd', album_id: 2},
    {song_name: '4Me 4Me', explicit: 0, featured: '', artist: 'Malcolm Todd', album_id: 2},
    {song_name: 'Art House', explicit: 0, featured: '', artist: 'Malcolm Todd', album_id: 2},
    {song_name: 'Sore Throat', explicit: 0, featured: '', artist: 'Malcolm Todd', album_id: 2},
    {song_name: 'Rockstar Boyfriend', explicit: 1, featured: '', artist: 'Malcolm Todd', album_id: 2},
    {song_name: 'New Friends', explicit: 0, featured: 'Eem Triplin', artist: 'Malcolm Todd', album_id: 2},
    {song_name: 'Accutane', explicit: 0, featured: '', artist: 'Malcolm Todd', album_id: 2},
    {song_name: 'Hot in NY', explicit: 0, featured: '', artist: 'Malcolm Todd', album_id: 2},
    {song_name: 'Pillow', explicit: 0, featured: '', artist: 'Malcolm Todd', album_id: 2},
    {song_name: 'Mr. Incorrect', explicit: 1, featured: '', artist: 'Malcolm Todd', album_id: 2},

    {song_name: 'i dont wanna', explicit: 0, featured: '', artist: 'snuffles', album_id: 4},
    {song_name: 'Fall End Sea', explicit: 0, featured: '', artist: 'snuffles', album_id: 5},

  ]);
};
