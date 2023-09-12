"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const googleapis_1 = require("googleapis");
const fs_1 = __importDefault(require("fs"));
const drive = googleapis_1.google.drive("v3");
// Load your service account credentials JSON file.
const appstick_school_150b7c62a012_json_1 = __importDefault(require("../../key/appstick-school-150b7c62a012.json")); // Ensure the correct file extension
// Ensure that the private_key is not undefined
if (!appstick_school_150b7c62a012_json_1.default.private_key) {
    throw new Error("Private key is missing in the credentials.");
}
// Authenticate using the service account credentials
const auth = new googleapis_1.google.auth.JWT({
    email: appstick_school_150b7c62a012_json_1.default.client_email,
    key: appstick_school_150b7c62a012_json_1.default.private_key,
    scopes: ["https://www.googleapis.com/auth/drive"],
});
const uploadFileToDrive = (file, filename) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const fileMetadata = {
        name: filename,
    };
    const media = {
        mimeType: "application/octet-stream",
        body: fs_1.default.createReadStream(file.path),
    };
    try {
        const response = yield drive.files.create({
            auth: auth,
            requestBody: fileMetadata,
            media: media,
            fields: "id,webViewLink",
        });
        const fileId = response.data.id;
        const fileLink = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.webViewLink;
        if (fileId) {
            yield drive.permissions.create({
                auth: auth,
                fileId: fileId,
                requestBody: {
                    role: "reader",
                    type: "anyone",
                },
            });
        }
        return fileLink;
    }
    catch (error) {
        console.error("Error uploading file to Google Drive:", error);
        throw error;
    }
});
exports.default = uploadFileToDrive;
