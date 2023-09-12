"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const cron = __importStar(require("node-cron"));
const uploadDestination = "./uploads/";
const cleanupInterval = 15; // 15 days
function deleteOldFiles() {
    const currentTime = Date.now();
    fs.readdir(uploadDestination, (err, files) => {
        if (err) {
            console.error("Error reading upload folder:", err);
            return;
        }
        files.forEach((file) => {
            const filePath = path.join(uploadDestination, file);
            fs.stat(filePath, (err, stats) => {
                if (err) {
                    console.error("Error checking file stats:", err);
                    return;
                }
                const fileAge = (currentTime - stats.mtime.getTime()) / (1000 * 60 * 60 * 24); // Convert to days
                if (fileAge >= cleanupInterval) {
                    fs.unlink(filePath, (err) => {
                        if (err) {
                            console.error("Error deleting file:", err);
                        }
                        else {
                            console.log(`Deleted file: ${filePath}`);
                        }
                    });
                }
            });
        });
    });
}
// Schedule the cleanup to run every day at a specific time (e.g., 2:00 AM)
cron.schedule("0 2 * * *", deleteOldFiles);
// Initial cleanup
deleteOldFiles();
