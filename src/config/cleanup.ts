import * as fs from "fs";
import * as path from "path";
import * as cron from "node-cron";

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
            } else {
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
