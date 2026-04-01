const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// Supaya Node.js bisa baca file HTML kita
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Endpoint untuk proses AI nanti
app.get('/summarize', (req, res) => {
    res.send('Mesin AI FarouqBook sedang bekerja...');
});

app.listen(PORT, () => {
    console.log(`FAROUQBOOK berjalan di http://localhost:${PORT}`);
});