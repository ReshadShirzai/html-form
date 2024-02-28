import express from "express"
import cors from "cors"
const app = express()
const port = 3000

app.use(cors())

const message = [];

app.get('/message', (req, res) => {
  message.push(
    {
      name: req.query.name,
      email: req.query.email,
      message: req.query.message
    }
  );
  // console.log(req.query.name);
  console.log(req.query);
  //  console.log(req.query.message);
  res.json(message);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})