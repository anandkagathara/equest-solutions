const express = require('express');
const router = express.Router();
const fs = require('fs');
const csv = require('csv-parser');
const { validateBearerToken } = require('../middleware/authMiddleware');


// router.get('/', (req, res) => {
//   res.json({
//     name: 'Anand',
//     age: 24,
//     email: 'anand@yopmail.com',
//     phone: '7043292912',
//     address: 'Rajkot',
//   });
// });


router.get('/',validateBearerToken, (req, res) => {
    const results = [];
    fs.createReadStream('MOCK_DATA.csv')
      .pipe(csv())
      .on('data', (data) => {
        results.push(data);
      })
      .on('end', () => {
        res.json(results);
      });
  });


module.exports = router;
