"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const zod_1 = require("zod");
exports.userSchema = (0, zod_1.object)({ body: (0, zod_1.object)({
        name: (0, zod_1.string)({
            required_error: "Name is required"
        }),
        email: (0, zod_1.string)({
            required_error: "Email is required"
        }).email("Invalid email Error"),
        password: (0, zod_1.string)({
            required_error: "Password is required"
        }).min(6, "Password is too short, must be a least 6 characters"),
        confirmPassword: (0, zod_1.string)({
            required_error: "Confirm Password is required"
        })
    }).refine((data) => data.password === data.confirmPassword, {
        message: "Password and Confirm Password do not match",
        path: ["confirmPassword"]
    })
});
