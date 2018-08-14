const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/', function(req, res, next) {
    console.log('Main page...');
    next();
});

app.use('/log_in', function(req, res, next) {
    console.log('Trying log in...');
    next();
});

app.get('/', function(req, res) {
    console.log('I am rendering main page...');
    res.render('main_page_template');
});

app.get('/log_in', function(req, res) {
    const data = {
        login: req.query.login,
        password: req.query.password
    }
    
    if (data.login === 'admin' && data.password === 'admin') {
        console.log('Correct data! I am rendering correct log in page...');
        res.render('admin_log_in');
    } else {
        console.log('Discorrect data!');
        res.render('error_data');
    }
});

app.listen(3000);

app.use(function(req, res, next) {
    res.status(404).send('I am sorry page error! Change path...');
});
