// 모듈을 추출
const fs = require('fs');
const http = require('http');
// 서버생성/서버실행
http.createServer( (request, response) => {
// HTML 파일을 읽습니다.
fs.readFile('./Pages/Main.html', function (error, data) {
if (error) {
response.writeHead(500,'utf8',{ 'Content-Type': 'text/plain' } );
response.end('Server: File error');
}
else {
response.writeHead(200, { 'Content-Type': 'text/html' } );
response.end(data);
}
});
}).listen(52273, () => {
console.log('Server Running at http://127.0.0.1:52273');
});