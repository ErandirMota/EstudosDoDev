const http = require('http');

const server = http.createServer((req, res) => {
  console.log('chegou na api');
  console.log(req.method);
  console.log(req.url);
  if (req.method === "GET" && req.url.startsWith("/user")) {
    res.writeHead(200);
    res.end("todos os usuários");
    console.log('Req get recebida');
    return;
  }

  if (req.method === "POST" && req.url.startsWith("/user")) {
    let bodyRaw = '';
    req.on('data', data => bodyRaw += data);
    let bodyJson = JSON.parse(bodyRaw);
    request.once('end', () => {
      console.log('servidor na porta 3000');
      return;
    });
  }

})

server.listen(3000, () => {
  console.log('Servidor iniciado em http://localhost:3000');
});