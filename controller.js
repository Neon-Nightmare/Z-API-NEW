const knex = require("knex")(require("./knexfile.js")["development"]);

//-CREATE--------------------------------------------------
async function addItem(table, params){
    const x = knex(`${table}`)
    .insert([params])
    .returning(Object.keys(params))
    return x;
}
//---------------------------------------------------------


//-READ----------------------------------------------------
async function getItem(id) {
    const x = await knex(`${id.table}`).select("*");
    return x;
}
//---------------------------------------------------------


//-UPDATE--------------------------------------------------
async function updateItem(table, id, params){
    const x = knex(`${table}`).where('id', id).update(params)
    .returning(['id'])
    return (x)
}
//--------------------------------------------------------


//-DELETE-------------------------------------------------
async function deleteItem(table, id){
    const x = knex(`${table}`)
    .where("id", id).del()
    return (x)
}
//---------------------------------------------------------


//-OTHER----------------------------------------------------------------------------------------------------------------------------------------------------------------
async function checker(name, email, password){
    const x = knex.select('artists.id as id', 'artists.name', 'artists.email', 'album_name', 'image', 'price', 'type', 'info', 'release', 'label', 'albums.id as album_id' )
    .from('artists')
    .fullOuterJoin('albums', function (){
        this.on('artists.name', '=', 'albums.artist')
    })
    .where({
        'artists.name': name, 
        'artists.email': email, 
        'artists.password': password
    })
    return (x)
}
async function getSpecific(table, params){
    const x = await knex(`${table}`)
    .select('*')
    .where(params)

    return x;
}
async function getAlbumSongs(id){
    const x = await knex.select('albums.id as album_id', 'album_name', 'song_name', 'tracks.id as tracks_id')
    .from('albums')
    .fullOuterJoin('tracks', function(){
        this.on('albums.id', '=', 'tracks.album_id')
    })
    .where('albums.id', id.id)

    return x
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
module.exports = { 
    getItem,
    deleteItem,
    updateItem,
    addItem,
    getSpecific,
    getAlbumSongs,
    checker
};