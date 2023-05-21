function readHttpLikeInput(){
    return 'GET /sum?nums=1,2,3 HTTP/1.1\nHost: student.shpp.me\n';
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
    if ($uri.slice(0, 4) !== '/sum') {
        statusCode = 404;
        statusMessage = 'Not Found';
        $body = 'not found'
        outputHttpResponse(statusCode, statusMessage, $headers, $body);
    }else if ($uri.slice(4, 10) !== '?nums=' || $method !== 'GET') {
        statusCode = 400;
        statusMessage = 'Bad Request';
        $body = 'not found'
        outputHttpResponse(statusCode, statusMessage, $headers, $body);
    }else {
        statusCode = 200;
        statusMessage = 'OK';
        $body = 5;
        outputHttpResponse(statusCode, statusMessage, $headers, $body);
    };

};

function parseTcpStringAsHttpRequest(string) { 
    string = string.split('\n');
    return {
      method : string[0].split(' ')[0], 
      uri : string[0].split(' ')[1],
      headers : {
        'Date' : new Date(),
        'Server' : 'Apache/2.2.14 (Win32)',
        'Content-Length' : 0,
        'Connection' : 'Closed',
        'Content-Type' : 'text/html; charset=utf-8',
      },
      body : string[string.length - 1]
  }
}

http = parseTcpStringAsHttpRequest(contents);
processHttpRequest(http.method, http.uri, http.headers, http.body);
