export const express = require('express');
const app = express();

// Middleware для получения IP-адреса клиента
app.use((req, res, next) => {
  const clientIp = req.ip; // Получаем IP-адрес клиента
  console.log(`IP-адрес клиента: ${clientIp}`);
  next(); // Переходим к следующему middleware или обработчику маршрута
});

app.get('/', (req, res) => {
  res.send('Привет, мир!');
});

app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});
