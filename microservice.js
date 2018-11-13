var express = require('express');
var app = express();
const throng = require('throng');
var WORKERS = process.env.WEB_CONCURRENCY || 4;
function sleep(milliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + milliseconds >= new Date().getTime()) {
   }
}

app.get('/sync-with-tk', function(req, res) {
  console.log("starting sync");
  sleep(5000);  
  console.log("end sync");
  res.send('Sync complete!');
});

function start() {

  app.listen(9000, function() {
    console.log('Example app listening on port 9000!');
  });
}
throng({
  workers: WORKERS,
  lifetime: Infinity
}, start);
