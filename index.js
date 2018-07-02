const Gun = require('gun')
process.env.GUN_ENV = 'deb'

var server = require('http').createServer().listen(8080);
var gun = Gun({
  localStorage: false,
  super: true,
  web: server
})

var app = gun.get('app').put({name:'app', type:'root'})
app.on((data)=>{console.log(data)}, true)
