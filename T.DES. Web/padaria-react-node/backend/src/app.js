const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const PORT = 3001;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const productRoute = require('./routes/productRoutes');

app.use('/produtos', productRoute);

app.listen(PORT, () => console.log('🤓 Server started at port ' + PORT));
