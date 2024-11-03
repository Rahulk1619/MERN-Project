const express = require("express");
const router = express.Router();
const authcontrollers = require("../controller/auth-controller");
const {signupSchema,loginSchema
    
} = require("../validators/auth-validators");
const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/auth-middleware");

// 1st way 
router.get("/", (req,res) => {
    res.status(200).send("Welcome to my channel");
});


// 2nd way**
router.route("/").get(authcontrollers.home);
router
    .route("/register")
    .post( validate(signupSchema), authcontrollers.register);
router
    .route("/login")
    .post(validate(loginSchema), authcontrollers.login);

router.route("/user").get(authMiddleware, authcontrollers.user);

module.exports = router;