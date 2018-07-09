var templateA = require("./template-a.pug");
var templateB = require("./template-b.pug");
var templateC = require("./template-c.pug");
var templateD = require("./template-d.pug");

event.on('user', function (data) {
  document.querySelector('.container').innerHTML += templateA(data)
  document.querySelector('.container').innerHTML += templateB(data)
  document.querySelector('.container').innerHTML += templateC(data)
})

event.on('book', function (data) {
  document.querySelector('.container').innerHTML += templateD(data)
})
