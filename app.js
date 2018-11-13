var express = require('express');
var app = express();

const { spawn } = require('child_process');
app.get('/', function(req, res) {
  	console.log('spawing process...');
	let spawnProcess = spawn('/bin/sh', [ '-c', 'curl -sSL http://localhost:9000/sync-with-tk/ | bash -s stable' ]);
	res.send('Im ready for another one');
});


app.listen(8000, function() {
  console.log('Example app listening on port 8000!');
});
