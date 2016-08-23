var express = require('express');
var router = express.Router();

var user = require('../lib/user.js');

router.get('/', user.index);

router.get('/:id', user.show);

router.post('/', user.create);

router.put('/:id', user.update);

router.delete('/:id', user.delete);

module.exports = router;