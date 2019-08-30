const {Router}  = require('express');
const router = Router();

const movies = require('../sample.json');
const _ = require('underscore');



router.get('/', (req, res) => {
    res.json(movies);
});

router.put('/:id', (req,res) => {
    const {id} = req.params;
    const { titulo, director, year, rating } = req.body;
    
    if (titulo && director && year && rating) {
        _.each(movies, (movie, i) => {
            if (movie.id == id) {
                movie.titulo = titulo;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
            }
        });
        res.json(movies);
        

    } else{
        res.status(500).json({error: 'Datos incompletos'});

    }


});

router.post('/',(req, res) => {
    const { titulo, director, year, rating } = req.body;
    
    if (titulo && director && year && rating) {
        const id = movies.length + 1;
        const newMovie = {...req.body, id};
        console.log(newMovie);
        movies.push(newMovie);
        res.json(movies);
    }else {
        res.status(500).json({error: 'Datos incompletos'});
}
 
});

router.delete('/:id', (req,res) => {
    const {id} = req.params;
    _.each(movies, (movie, i) => {
        if (movie.id == id) {
            movies.splice(i,1);
        }
    });
    res.send(movies);
});

module.exports = router;
