const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());

app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
);

const router = require("./routes/router");
app.use(router);

app.listen(4000, () => {
    console.log(`server is running at port 4000`);
});
