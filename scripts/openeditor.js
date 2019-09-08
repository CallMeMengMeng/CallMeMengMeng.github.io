//Windows
//var spawn = require('child_process').exec;
//hexo.on('new', function(data){
//	spawn('start  "~/atom" ' + data.path);
//});

//Linux
var spawn = require('child_process').exec;
hexo.on('new', function(data){
	spawn('atom',[data.path]);
});
