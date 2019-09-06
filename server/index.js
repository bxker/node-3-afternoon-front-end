const express = require('express');
const app = express();
const axios = require('axios')

app.get('/api/front-end', (req, res) => {
    axios
        .get('http://localhost:3002/api/products')
        .then(response => {
            res.status(200).json(response.data)
        }
)})
//Eric ^


app.listen(3001, () => console.log('Front-end server listening on 3001'))