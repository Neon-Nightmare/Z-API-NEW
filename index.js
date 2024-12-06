const express = require('express');
const cors = require('cors');
const knex = require('knex')(require('./knexfile.js')["development"]);
const server = express();
const port = 3000;
const { 
    getItem,
    deleteItem,
    updateItem,
    addItem,
    getSpecific,
    getAlbumSongs,
    checker
} = require('./controller.js');

server.use(cors());
server.use(express.urlencoded({extended: true}))
server.use(express.json());

server.listen(port, '0.0.0.0', () => console.log(`Server is listening at port ${port}`));

server.get('/', (req, res) => {
    res.send('The server is up and running!')
});

//-CREATE------------------------------------------------------
server.post('/addItem', (req, res) =>{
    const {table} = req.body

    addItem(table, req.query).then((data) => {
        res.status(200).send(data)
    })
    .catch((error) => {
        console.error(error);
        res.status(500).json({ error: 'Failed to add item'})
    })
})
//--------------------------------------------------------------


//-READ---------------------------------------------------------
server.get('/music', (req, res) =>{
    getItem(req.query).then((data) => {
        console.log(req.query)
        res.send(data);
    })
    .catch((error) => {
        console.error(error);
        res.status(500).json({ error: 'Failed to read item'})
    })
})


//--------------------------------------------------------------


//-UPDATE-------------------------------------------------------
server.patch('/update', (req, res) => {
    
    const { table, id } = req.body;

    updateItem(table, id, req.query)
    .then(data => {
        res.json(data);
    })
    .catch((error) => {
        console.log(error);
        res.status(500).send('Failed to update Item');
    })

})
//--------------------------------------------------------------


//-DELETE-------------------------------------------------------
server.delete('/delete', (req, res) => {
    const {table, id} = req.body

    deleteItem(table, id).then((data) =>{
        console.log(`Successful Deletion from '${table}' with an id of '${id}'`)
        res.json(data);
        
    })
    .catch((error) => {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete Item'})
    })
})
//--------------------------------------------------------------



//-OTHER-ENDPOINTS----------------------------------------------------The /login endpoint is used to verify Artists accounts and then return Artists Discography
server.post('/login', (req, res) =>{
    const {name, email, password} = req.body

    checker(name, email, password).then((data) => {
        if(data == false){
            res.status(500).json({ error: 'error lol'})
        } else {
            res.status(200).send(data)
        }
    })
    .catch((error) => {
        console.error(error);
        res.status(500).json({ error: 'error lol'})
    })
})
//--------------------------------------------------------------The /select endpoint is used to request specific information based on the Table selected in the body and whatever is passed through the Query Parameters
server.post('/select', (req, res) =>{
    const {table} = req.body

    getSpecific(table, req.query).then((data) => {
        console.log(req.query)
        res.send(data);
    })
    .catch((error) => {
        console.error(error);
        res.status(500).json({ error: 'Failed to read item'})
    })
})
//--------------------------------------------------------------The /albumsong endpoint is used to request all tracks within a specified album, the album to search within is selected by passing the album Id through the Query parameters
server.get('/albumsong', (req, res) => {

    getAlbumSongs(req.query).then((data) => {
        res.send(data);
    }).catch((error) => {
        console.error(error);
        res.status(500).json({ error: 'Failed to get albums tracks'})
    })
})
//--------------------------------------------------------------