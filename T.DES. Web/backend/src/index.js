const express = require('express');

const routes = require('./routes/userRoutes');

const app = express();
/*const cors = require('./app/middlewares/cors');*/

app.use(express.json());

app.use(routes);

app.listen(3001, () =>
  console.log('🔥 Server started at http://localhost:3001')
);
