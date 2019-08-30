const {Router} = require('express');
const router = Router();

router.get ('/', (req, res) => {
    res.send({"Titulo": "Hello World"});

});

router.get('/test', (req, res) => {
    res.json(movies);
    
});

module.exports =  router;