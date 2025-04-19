require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json({ extended: false }));

// Payment routes
app.use("/payment", require("./routes/payment"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started on port ${port}`));
