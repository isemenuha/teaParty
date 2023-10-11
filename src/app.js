require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const dbConnectionCheck = require('../db/dbConnectChecker');

const { PORT } = process.env;

const app = express();
const teaCardRouter = require('./routes/teaCard');
const teaFetchRouter = require('./routes/getTeaDetails');
dbConnectionCheck();

// * Конфиг для куки в виде файла сессий
// const sessionConfig = {
//   name: 'TeaCookie',
//   store: new FileStore(),
//   secret: process.env.SESSION_SECRET ?? 'Секретное слово',
//   resave: false, // * если true, пересохранит сессию, даже если она не менялась
//   saveUninitialized: false, // * если false, куки появятся только при установке req.session
//   cookie: {
//     maxAge: 9999999, // * время жизни в мс (ms)
//     httpOnly: true,
//   },
// };
const indexRoutes = require('./routes/indexRoutes');

app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'public')));
// * Подключи сессии как мидлу
// app.use(session(sessionConfig));
app.use('/', indexRoutes);
app.use('/', teaCardRouter);
app.use('/', teaFetchRouter);

app.listen(PORT ?? 3100, () => {
  console.log('Сервер запущен!');
});
