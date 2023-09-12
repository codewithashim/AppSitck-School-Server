import { google } from "googleapis";
import fs from "fs";

const drive = google.drive("v3");

// Load your service account credentials JSON file.
import credentials from "../../key/appstick-school-150b7c62a012.json"; // Ensure the correct file extension

// Ensure that the private_key is not undefined
if (!credentials.private_key) {
  throw new Error("Private key is missing in the credentials.");
}

// Authenticate using the service account credentials
const auth = new google.auth.JWT({
  email: credentials.client_email,
  key: credentials.private_key,
  scopes: ["https://www.googleapis.com/auth/drive"],
});

interface File {
  path: fs.PathLike;
}

const uploadFileToDrive = async (
  file: File,
  filename: string
): Promise<any> => {
  const fileMetadata = {
    name: filename,
  };
  const media = {
    mimeType: "application/octet-stream",
    body: fs.createReadStream(file.path),
  };

  try {
    const response = await drive.files.create({
      auth: auth,
      requestBody: fileMetadata,
      media: media,
      fields: "id,webViewLink",
    });

    const fileId = response.data.id;
    const fileLink = response?.data?.webViewLink;

    if (fileId) {
      await drive.permissions.create({
        auth: auth,
        fileId: fileId,
        requestBody: {
          role: "reader",
          type: "anyone",
        },
      });
    }

    return fileLink;
  } catch (error) {
    console.error("Error uploading file to Google Drive:", error);
    throw error;
  }
};

export default uploadFileToDrive;
