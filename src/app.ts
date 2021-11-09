import express from 'express';

const app = express();
const port = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Prueba del servidor');
});
app.listen(port, () => {
    return console.log(`Servidor corriendo sobre el puerto ${port}`)
});