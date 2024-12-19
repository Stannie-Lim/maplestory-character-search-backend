const express = require("express");
const axios = require("axios");

const app = express();

app.get("/character-search/:name", async (req, res, next) => {
  try {
    const { data } =
      await axios.get(`https://www.nexon.com/api/maplestory/no-auth/v1/ranking/na?type=overall&id=weekly&reboot_index=0&page_index=1&character_name=${req.params.name}
`);

    res.send(data);
  } catch (error) {
    next(error);
  }
});

app.listen(3000);
