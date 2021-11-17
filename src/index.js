const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Successful',
        body: {
            message: 'Hello world!!!'
        }
    })
})

app.listen(10000, () => {
    console.log('App is running on port 10000')
})