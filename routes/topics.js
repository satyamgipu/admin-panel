var express = require('express');
var database = require('../config/db_connection');
const { request } = require('../app');
const { response } = require('express');

var router = express.Router();

router.get('/create', function (request, response, next) {
  response.render(`topic-create`,{message:request.flash('message')});
});
router.post('/post-form', function (request, response, next) {
  if (database != null) {
    database.query('INSERT INTO countries_details SET ?', request.body, function (error, success) {
      if (!error) {
         request.flash('message','saved successfully');
        response.redirect('/topics/create');

      }
      else {
        response.send(error.message);
      }
    });
  }
});


router.get('/all',function(request,response,next){
  if(database !=null){
    database.query(`SELECT * FROM countries_details`,function(error,result){
      if(!error){
        response.render('topics-all',{topics : result });
      }
    })
  }
})
module.exports = router;