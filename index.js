const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log(`responding to request ${req} at ${new Date().toLocaleString()}`);
    res.send('Hello World!');
});
app.get('/1', (req, res) => res.send('1'));
app.get('/2', (req, res) => res.send('2'));
app.get('/3', (req, res) => res.send('3'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));