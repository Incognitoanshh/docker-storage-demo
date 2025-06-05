const fs = require("fs");
const config = require("./config.json");

fs.mkdirSync("/data/logs", { recursive: true }); // 🔥 yeh line important hai
fs.appendFileSync("/data/logs/output.log", `Started app: ${new Date()}\n`);
fs.writeFileSync("/tmpfs/temp.txt", "This is temp data in RAM\n");

console.log("📦 Config:", config);
console.log("✅ Log saved to /data/logs/output.log");
