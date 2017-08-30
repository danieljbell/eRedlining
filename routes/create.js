var express = require('express');
var router = express.Router();

/* POST home page. */
router.post('/', function(req, res, next) {
  // res.render('index', { title: 'Prepare Contracts Entirely Online' });
  axios.post('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  // res.send('processing');
});

module.exports = router;
