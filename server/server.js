const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.json())
app.use(cors())

// allows you to serve static files
app.use(express.static('public'))

// sendFile.join is combining the current directory name with the specified url
// This is useful because we can serve files to our front end
app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'))
})

app.get('/castle', (req, res) => {
    res.status(200).send(`<h1>Welcome to my castle!</h1>`)
})

app.get('/profile', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/profile.html'))
})


app.listen(4000, 
    () => console.log(`Wh-Wha? What time is it?`)
)