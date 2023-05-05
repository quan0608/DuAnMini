var jwt = require('jsonwebtoken');
var token = jwt.sign({ money: '99999' }, 'a');

console.log(token)