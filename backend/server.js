// import { Sequelize } from 'sequelize';
// const sequelize = new Sequelize('blog', 'postgres', 'postgres', {
//   host: 'db',
//   dialect: 'postgres'
// });

// try {
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }

require('dotenv').config()
const express = require('express');
const authRouter = require('./routes/authRoute')
const app = express();
const port = process.env.APP_PORT || 3000;

var secrets = require('./config/secrets');
const { router } = require('./routes/authRoute');

app.get("/", (req, res) => {
  res.status(200).json({ 
    status: "success",
    message: "Hello World!" });
});

// Routes
app.use('/api/v1/auth', authRouter.router);
app.use('*', (req, res, next)=> {
    res.status(404).json({
      status: "fail",
      message: "Route not found"
    })
})

app.listen(port, () => {
  console.log(`Server listening at Port ${port}`)
})


