const Gun = require('gun')
process.env.GUN_ENV = false;

var server = require('http').createServer().listen(8000);
var gun = Gun({
  localStorage: false,
  super: true,
  batch: 100,
  chunk: 5 * 1024,
  web: server
})

var app = gun.get('app').put({name:'app', type:'root'})
/*app.on((data)=>{console.log(data)})*/
var foo = []
app.once((val,key)=>{console.log(key,val);foo.push([key,val])})

var start = process.hrtime()
console.log('write started');
var i = 0;
var end = 16002;
for (var i = 0; i < end; i++) {
  app.get('test'+i).put({name:'test'+i})
}
console.log(`write end ${process.hrtime(start)}`);

var start = process.hrtime()
console.log('read started');
var y = 0;
var rEnd = 16002;
app.get('test1').once((node,key)=>{console.log(key,node);})
app.get('test100').once((node,key)=>{console.log(key,node);})
app.get('test500').once((node,key)=>{console.log(key,node);})
for (var y = 0; y < rEnd; y++) {
  app.get('test'+y).once((node,key)=>{})
}
console.log(`read end ${process.hrtime(start)}`);
var logTime = function(){
  //console.log(foo);
}
setTimeout(logTime, 1000)
