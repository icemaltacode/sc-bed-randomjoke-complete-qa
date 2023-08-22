var express = require('express');
var getJoke = require('../lib/randomjoke');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res) {
    const joke = await getJoke();
    res.render('index', { setup: joke.setup, punchline: joke.punchline });
});

module.exports = router;
