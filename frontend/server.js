const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

// Указываем express, что статические файлы будут в папке public
app.use(express.static(path.join(__dirname, 'public')));

// Главная страница, отдаем index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Слушаем сервер на указанном порту
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});