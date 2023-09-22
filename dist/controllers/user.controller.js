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
exports.signup = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const created = (input) => __awaiter(void 0, void 0, void 0, function* () {
            return yield user_model_1.default.create(input);
        });
        const user = yield created(req.body);
        res.status(201).json({
            data: user
        });
    }
    catch (error) {
        return res.status(409).json({
            message: error.message
        });
    }
});
exports.signup = signup;
