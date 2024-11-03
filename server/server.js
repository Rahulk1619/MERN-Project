require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router.js");
const serviceRoute = require("./router/service-router.js");
const adminRoute = require("./router/admin-router.js");
const connectDB = require("./utils/db.js");
const errorMiddleware = require("./middlewares/error-middleware.js");

// CORS options
const corsOptions = {
    origin: "https://codecraftacadmy.netlify.app",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Define routes
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);
app.use("/api/admin", adminRoute);

// Root route
app.get("/", (req, res) => {
    res.status(200).send("Chalo suru karte hai!!");
});

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server is running on port", PORT);
    });
});
