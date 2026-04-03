const http = require("http");
const WebSocket = require("ws");
const { setupWSConnection } = require("./utils/yjs-utils.js");

const server = http.createServer();

const wss = new WebSocket.Server({ server });

wss.on("connection", (conn, req) => {
  setupWSConnection(conn, req);
});

const PORT = process.env.PORT || 1234;

server.listen(PORT, () => {
  console.log(`Yjs server running on port ${PORT}`);
});