// этот файл надо будет дописать...

// не обращайте на эту функцию внимания 
// она нужна для того чтобы правильно читать входные данные
function readHttpLikeInput(){
    var fs = require("fs");
    var res = "";
    var buffer = Buffer.alloc ? Buffer.alloc(1) : new Buffer(1);
    let was10 = 0;
    for(;;){ 
        try { fs.readSync(0 /*stdin fd*/, buffer, 0, 1); } catch (e) {break; /* windows */}
        if(buffer[0] === 10 || buffer[0] === 13) {
            if (was10 > 10) 
                break;
            was10++;
        } else 
           was10 = 0;
        res += new String(buffer);
    }

    return res;
}

let contents = readHttpLikeInput();

// вот эту функцию собственно надо написать
function parseTcpStringAsHttpRequest(string) { 
  string = string.split('\n');
  return {
    method : string[0].split(' ')[0], 
    uri : string[0].split(' ')[1],
    headers : {
      'Host' : string[1].split(' ')[1],
      'Accept' : string[2].slice(8),
      'Accept-Language' : string[3].slice(17),
      'Accept-Encoding' : string[4].slice(17),
      'User-Agent' : string[5].slice(12),
      'Content-Length' : string[6].slice(16)
    },
    body : string[8]
  };
}
 
 
processHttpRequest(http.method, http.uri, http.headers, http.body);
 



http = parseTcpStringAsHttpRequest(contents); 
console.log(JSON.stringify(http, undefined, 2));