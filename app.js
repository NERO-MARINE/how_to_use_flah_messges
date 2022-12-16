const express = require('express');
const session = require('express-session');
const connectFlash = require('connect-flash');

const port = 3000;

const app = express();

app.set('view engine', 'ejs');

// use express-session
app.use(session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false
}))

app.use(connectFlash());

app.use((req,res,next)=>{
    res.locals.messages = req.flash();
    next()
})


app.get('/', (req,res)=>{
  req.flash('error', 'this is an error');
  req.flash('info', 'this is an error2');
  req.flash('success', 'this is an error3')
//   const messages = req.flash()
//    console.log(messages)
//     res.render('index', {messages})
 res.redirect('/about')
})

app.get('/about', (req,res)=>{
    res.render('about')
})

app.listen(port, ()=>{
    console.log(`listening for request at ${port}`)
})