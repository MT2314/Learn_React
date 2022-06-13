import express from 'express';
import path from 'path';
const app = express();
const PORT = 8085;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('./'));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + 'index.html'))
})

app.listen(PORT, () => {
    console.log(`server connected to ${PORT}`);
})