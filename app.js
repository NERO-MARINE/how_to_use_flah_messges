const express = require('express');
const session = require('express-session');
const connectFlash = require('connect-flash');

const port = 3000;

const app = express();

app.set('view engine', 'ejs');

// use express-session

app.use(session({
    secret: 'your own secret',
    resave: false,
    saveUninitialized: false,
}))

// use connect flash
app.use(connectFlash());

app.use((req,res,next)=>{
    res.locals.messages = req.flash();
    next()
})


app.get('/', (req,res)=>{
   req.flash('error', 'there is an error1');
   req.flash('success', 'you were successful1');
   req.flash('success', 'you were successful2');
   req.flash('success', 'you were successful3');
   req.flash('error', 'there is an error2');
   req.flash('info', 'you have been informed');

//    const messages = req.flash()
//    console.log(messages);
//    res.render('index', {messages});
  res.redirect('/about')
})

app.get('/about', (req,res)=>{
    res.render('about')
})

app.listen(port, ()=>{
    console.log(`listening for request at ${port}`)
})