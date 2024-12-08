import express from "express";
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get("/about", function (req, res) {
  const heading = "This is the aout page";
  const content =
    "First time creating a Nodejs server with the express framework";
    const data = {heading,content}
  res.json({data});
});

app.listen(4000, () => {
  console.log("Server active and running on PORT 4000");
});
