import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello Browser"); // Use `res.send` to send a response
});

app.listen(port, () => {
    console.log(`Hey go to http://localhost:${port}`); // Changed https to http
});
