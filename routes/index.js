const express = require('express');
const router = express.Router();

router.get('/redos-me', (req, res) => {
  const query = '////////////////////////////////////////////////////////////////////////////\n';
  console.log(query);
  console.log('redos running');

  // Redos
  if (query.match(/(\/.+)+$/)) {
    console.log('valid path');
  }
  else {
    console.log('invalid path');
  }

  res.sendStatus(200);
});

router.get('/', (req, res, next) => {
  res.send('index');
});

module.exports = router;