const {z, Schema} = require("zod");


const loginSchema = z.object({
    email:z
        .string({ required_error: "Email is required"})
        .trim()
        .email({message: "Invalid email address" })
        .min(3,{message: "Email must be at least of 3 character "})
        .max(255, {message: "Email must not be more than 255 character"}),

    password:z
        .string({ required_error: "Password is required"})
        .min(7,{message: "password must be at least of 6 character "})
        .max(1024, {message: "Password must not be more than 1024 character"}),

})


// creating a object Schema

const signupSchema = loginSchema.extend({
    username: z
    .string({ required_error: "Name is required"})
    .trim()
    .min(3,{message: "Name must be at least of 3 character "})
    .max(255, {message: "Name must not be more than 255 character"}),


    phone:z
    .string({ required_error: "Phone is required"})
    .trim()
    .min(10,{message: "Phone must be at least of 10 digit "})
    .max(20, {message: "phone must not be more than 20 digit "}),


});

module.exports = {signupSchema, loginSchema};