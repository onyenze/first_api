"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("../controllers/user.controller");
const user_schema_1 = require("../schemas/user.schema");
const validate_1 = __importDefault(require("../middlewares/validate"));
const route = (app) => {
    app.post("api/signup", (0, validate_1.default)(user_schema_1.userSchema), user_controller_1.signup);
};
exports.default = route;
