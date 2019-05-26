var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
	console.log("	Request : " +req.url,true);
		
		
		fs.readFile('word.csv',"utf8", function(err, data) {
		var result=new Array();
		var words=new Array();
		result = data.split("\r\n"); 

		
		
		
		var myurlObj=url.parse(req.url, true);
		var q = url.parse(req.url, true).query.word;
	  
	  if (err){
		    res.writeHead(404, {'Content-Type': 'text/html'})
		    res.write("Page Not Found");
	  }
	  
	  
	  else{ 
	  		for(var i=0;i<result.length;i++){
			var str=result[i];
			words=str.split(",");
			if(words[0]==q) data=words[1];
									}
									
		    res.writeHead(200, {'Content-Type': 'text/plain'});
		    res.write(data);
		  
	  }
   res.end();
  });
}).listen(8080);
