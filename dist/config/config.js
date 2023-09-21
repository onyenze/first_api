"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config;
exports.default = {
    // MongoDB connection options
    mongoURI: `mongodb+srv://chibuezeonyenze123:UMFsay5MGcmoqlBp@cluster0.scljp5s.mongodb.net/`,
    mongoOptions: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false, // Disable deprecated methods
    },
};
