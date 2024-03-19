import EventEmitter from "events";

// Creating Instance
const customeEmitter = new EventEmitter();

// 1. on: listen/register for an event
// 2. once: listen/register for an event(only fire once)
// 3. emit: emit/call an event

customeEmitter.on("response", (name, id) => {
  console.log(`user: ${name} id: ${id}`);
});

customeEmitter.emit("response", "John", 18);
customeEmitter.emit("response", "huxn", 28);
customeEmitter.emit("response", "alex", 10);
