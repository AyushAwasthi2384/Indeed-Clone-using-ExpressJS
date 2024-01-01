const router = require('express').Router();

router.get('/', (req,res)=>{
    res.render('index.ejs');
})
router.get('/jobs', (req,res)=>{
    res.render('jobs.ejs');
})

module.exports = router;