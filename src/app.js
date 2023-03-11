const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('./routes');
const limiter = require('../src/middleware/limitMiddleware');
const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use('/api', limiter,routes);

// start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
