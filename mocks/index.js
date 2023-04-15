const { setupServer } = require("msw/node");

const server = setupServer();

server.listen({ onUnhandledRequest: "error" });
console.info("🔶 Mock server running");

process.once("SIGINT", () => server.close());
process.once("SIGTERM", () => server.close());
