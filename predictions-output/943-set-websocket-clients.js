// WebSocket Clients with Set
// Problem: Manage connected websocket clients.
// Solution:
const wsClients = new Set();
function connect(c) { wsClients.add(c); }
function disconnect(c) { wsClients.delete(c); }
connect("c1"); connect("c2"); disconnect("c1");
console.log(wsClients);
// Conclusion: Sets track connected clients easily.
