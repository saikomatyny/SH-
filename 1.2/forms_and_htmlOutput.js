const fs = require('fs');
logins_and_passwords = fs.readFileSync("passwords.txt", 'utf-8').split('\n');

function readHttpLikeInput(){
    return 'POST /api/checkLoginAndPassword HTTP/1.1\nAccept: */*\nContent-Type: application/x-www-form-urlencod\nUser-Agent: Mozilla/4.0\nContent-Length: 35\n\nlogin=student&password=12345';
}

let contents = readHttpLikeInput();

function outputHttpResponse(statusCode, statusMessage, not_parsed_headers, body) {
    let headers = '';
    not_parsed_headers['Content-Length'] = body.toString().length;
    for (let key in not_parsed_headers) {
        headers += key + ' : ' +  not_parsed_headers[key] + '\n';
    }
    
    console.log("HTTP/1.1 " + statusCode + " " + statusMessage + "\n" + headers + "\n" + body);
}

function processHttpRequest($method, $uri, $headers, $body) {
    let statusCode;
    let statusMessage;
    let body = $body.split('&');
    
    if ($uri !== '/api/checkLoginAndPassword' || $headers['Content-Type'] !== 'application/x-www-form-urlencod') {
        statusCode = 400;
        statusMessage = 'Bad Request';
        $body = 'not found'
        outputHttpResponse(statusCode, statusMessage, $headers, $body);
    }else if ((logins_and_passwords).includes(body[0].slice(6) + ':' + body[1].slice(9))) {
        body = '<h1 style="color:green">FOUND</h1>';
        statusCode = 200;
        statusMessage = 'OK';
        outputHttpResponse(statusCode, statusMessage, $headers, body);
    }else {
        body = '<h1 style="color:red">NOT FOUND</h1>';
        statusCode = 200;
        statusMessage = 'OK';
        outputHttpResponse(statusCode, statusMessage, $headers, body);
    }

};

function parseTcpStringAsHttpRequest(string) { 
    string = string.split('\n');
    return {
      method : string[0].split(' ')[0], 
      uri : string[0].split(' ')[1],
      headers : {
        'Accept' : string[1].split(':')[1].slice(1),
        'Content-Type' : string[2].split(':')[1].slice(1),
        'User-Agent' : string[3].split(':')[1].slice(1),
        'Content-Length' : 0
      },
      body : string[string.length - 1]
  }
}

http = parseTcpStringAsHttpRequest(contents);
processHttpRequest(http.method, http.uri, http.headers, http.body);
