var express = require('express');
var router = express.Router();
var database=require('../config/db_connection');

router.get('/testconnection',function(request,response,next){
  if(database != null){
    response.send(`connection successffull`);
  }
  else{
    response.send(`connection error`);
  }
})

/* GET home page. */
router.get('/', function(req, res, next) {
  var people=[{
    id:101,
    name:"satyam ",
    email:"satyamgupta1414@getMaxListeners.com"
  },
  {
    id:102,
    name:"Rohan",
    email:"sat1414@getMaxListeners.com"
  },
  {
    id:103,
    name:"Rohandas",
    email:"satyam14@getMaxListeners.com"
  },
  {
    id:104,
    name:"Rjdfkj",
    email:"satyamgupta@getMaxListeners.com"
  }]
  res.render('index', { title: 'Hello world',people:people });
});

/*Posgt home PAge*/
router.post(`/post-form`,function(req,res,next){
  res.res(`Hello`);
});

module.exports = router;