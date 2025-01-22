const express = require('express');
const axios = require('axios');
const cors = require('cors');

//REDIS
const Redis = require('@redis/client');
const redisClient = Redis.createClient();
const DEFULT_EXPRESSION = 3600;

const port = 3000;
const app = express();

// Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect to Redis
redisClient.connect().catch(err => console.error('Redis Client Error', err));

// Basic route
app.get('/photos', async (req, res) => {
    const albumId = req.query.albumId;
    
    // Check Redis cache
    const cachedPhotos = await redisClient.get(`photos?albumId=${albumId}`);
    if (cachedPhotos) {
        console.log('cache Hit');
        return res.json(JSON.parse(cachedPhotos));
    }

    const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/photos",
        { params: { albumId } }
    );
    console.log('cache Miss');
    redisClient.SETEX(`photos?albumId=${albumId}`, DEFULT_EXPRESSION, JSON.stringify(data));
    res.json(data);
});

// Basic route
// app.get('/photos', async (req, res) => {
//     const albumId = req.query.albumId;

//     const photos = await getOrSetCache(`photos?albumId=${albumId}`, async() => {
//         const { data } = await axios.get(
//             "https://jsonplaceholder.typicode.com/photos",
//             { params: { albumId } }
//         );
//         return data
//     })
//     res.json(photos)
// });


app.get('/photos/:id', async (req, res) => {
    const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/photos/${req.params.id}`
    );
    res.json(data);
});

function getOrSetCache(key, cb) {
    return new Promise((resolve, reject) => {
        redisClient.get(key, async (error, data) => {
            if(error) return reject(error)
            if(data != null) return resolve(JSON.parse(data))
            const freshData = await cb()
            redisClient.SETEX(key,DEFULT_EXPRESSION, JSON.stringify(freshData))
            resolve(freshData)
        })
    })
}

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});