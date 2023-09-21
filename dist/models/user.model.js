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
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const userschema = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true
    },
    name: {
        type: String,
        required: [true, "name is required"]
    },
    password: {
        type: String,
        required: [true, "password is required"]
    }
}, { timestamps: true });
userschema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        let user = this;
        if (user.isModified('password')) {
            return next();
        }
        else {
            const salt = yield bcrypt_1.default.genSalt(10);
            const hash = yield bcrypt_1.default.hashSync(user.password, salt);
            user.password = hash;
            return next();
        }
    });
});
userschema.methods.comparePassword = function (userPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        let user = this;
        return yield bcrypt_1.default.compare(user.password, userPassword).catch((error) => false);
    });
};
const userModel = mongoose_1.default.model("Users", userschema);
exports.default = userModel;
