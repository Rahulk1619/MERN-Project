require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
// const router = require("./router/auth-router");
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router.js");
const serviceRoute = require("./router/service-router.js");
const adminRoute =  require("./router/admin-router.js");
const connectDB = require("./utils/db.js");
const errorMiddleware = require("./middlewares/error-middleware.js");

// undertsanding cors
const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};


app.use(cors(corsOptions));

app.use(express.json());

// app.use("/api/auth", router);
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

// Lets define admin route
app.use("/api/admin",adminRoute);



app.use(errorMiddleware);


// app.get("/", (req,res) => {
//     res.status(200).send("Chalo suru karte hai!!");
// });

// app.get("/register", (req,res) => {
//     res.status(200).send("Chalo suru karte hai!!");
// });

const PORT =5000;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server is running on port", PORT);
    });
});
     