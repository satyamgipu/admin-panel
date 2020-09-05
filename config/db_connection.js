var mysql=require('mysql');
var connectionPool=mysql.createPool({
    host:`localhost`,
    user:'root',
    password: ``,
    database:'mhrd_data',
    debug:false
})

module.exports=connectionPool;