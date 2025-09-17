// Real-time Game Rooms
// Problem: Track players across rooms.
// Solution:
const rooms = new Map();
function join(room, user) {
  if (!rooms.has(room)) rooms.set(room, new Set());
  rooms.get(room).add(user);
}
join("room1","p1"); join("room1","p2");
console.log(rooms);
// Conclusion: Map+Set handles rooms+players.
