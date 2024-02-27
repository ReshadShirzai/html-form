import express from "express"
import cors from "cors"
const app = express()
const port = 3000

app.use(cors())

const messages = [];

app.get('/message', (req, res) => {
    messages.push(
        {
            name: req.query.name,
            email: req.query.email,
            message: req.query.message
        }
    );
    console.log(req.query.name);
    console.log(req.query.email);
    console.log(req.query.message);
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})