"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./app"));
const PORT = process.env.PORT || 5000;
const server = http_1.default.createServer(app_1.default);
server.listen(PORT, () => {
    console.log(`martiful is life at ${PORT}`);
});
// Handle server errors
server.on("error", (error) => {
    if (error.syscall !== "listen")
        throw error;
    switch (error.code) {
        case "EACCES":
            console.error(`Port ${PORT} requires elevated privileges`);
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(`Port ${PORT} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
});
//# sourceMappingURL=server.js.map