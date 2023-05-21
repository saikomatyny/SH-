function readHttpLikeInput(){
    return 'GET /sum?nums=1,2,3 HTTP/1.1\nHost: student.shpp.me\n';
}

let contents = readHttpLikeInput();

function outputHttpResponse(statusCode, statusMessage, headers_, body) {
    let headers = '';
    for (let key in headers_) {
        headers += key + ' : ' +  headers_[key] + '\n';
    };
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
        'Host' : string[1].split(' ')[1],
        /*'Accept' : string[2].slice(8),
        'Accept-Language' : string[3].slice(17),
        'Accept-Encoding' : string[4].slice(17),
        'User-Agent' : string[5].slice(12),
        'Content-Length' : string[6].slice(16)*/
      },
      body : string[-1]
  }
}

http = parseTcpStringAsHttpRequest(contents);
processHttpRequest(http.method, http.uri, http.headers, http.body);
   
