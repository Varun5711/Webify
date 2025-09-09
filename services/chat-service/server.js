import http from "http";
import app from "./app.js";
import "dotenv/config";

const server = http.createServer(app);

const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(`chat service is running on port ${PORT}`);
});