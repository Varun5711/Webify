import http from "http";
import app from "./app.js";

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`user service is running on port ${PORT}`);
});