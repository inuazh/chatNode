const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  
  try {
    const r = await axios.put(
      'https://api.chatengine.io/users/',
        {username: username,secret: username, first_name}
    )
  } catch (error) {
    
  }

  fe93fdf1-3756-47cc-b155-08ec9cd47dc8
  return res.json({ username: username, secret: "sha256..." });
});



app.listen(3001);