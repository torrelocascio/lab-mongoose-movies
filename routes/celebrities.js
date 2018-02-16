var express = require('express');
const Celebrity = require('../model/celebrity')
var router = express.Router();

/* GET users listing. */
router.get('/celebrities', function(req, res, next) {
  Celebrity.find({}, (err, theCelebrities) => {
    if (err) {return next(err) }

    res.render('celebrities', {
        celebrities: theCelebrities
});
  })

})

router.get('/celebrities', (req, res, next) => {
  const celebrityId = req.query.id;

  Celebrity.findById(celebrityId, (err, product) => {
    if (err) { return next(err); }
    res.render('views/celebritydetails', { product: product });
  });
});



module.exports = router;
