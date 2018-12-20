var Gun  = require('gun');
require('gun/sea');

var gun = Gun();
var user = gun.user();
var name = 'Administrator';
var passp = 'Iwilladmintheheckoutofthis!';
user.create(name, passp, auth)

function auth() {
  user.auth(name, passp, timedPut);
}

function timedPut() {
  setTimeout(tPut, 100);
}

function tPut() {
  user.get('timed').put({timed: Gun.text.random(7)});
}
