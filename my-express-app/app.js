const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:8081' // Permet l’accès uniquement de mon localhost
}));

const db = initializeDatabase();
setupRoutes(app, db);

const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
];

app.get('/api/items', (req, res) => {
    res.json(items);
});

app.post('/api/add-item', (req, res) => {
    const newItem = req.body;  // Récupérer l'item envoyé dans la requête POST
    items.push(newItem);  // Ajouter le nouvel item à la liste
    res.status(201).send('Item ajouté avec succès');
});
  

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

// GET avec variable dans la requête
app.get('/maroute/plusderoute', (req, res) => {
    const value = req.query.value;
    res.send(`Received value: ${value}`);
});
  

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
