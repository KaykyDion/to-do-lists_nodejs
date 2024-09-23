const path = require("node:path");

const express = require("express");
const router = require("./routes");

const app = express();

app.use(express.static("public"));
app.use(
  "/bootstrap",
  express.static(path.resolve(__dirname, "../node_modules/bootstrap/dist"))
);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});
