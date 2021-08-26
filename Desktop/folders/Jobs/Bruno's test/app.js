const express = require('express');
const app = express();
const port = 3000;
const axios = require("axios").default;
const CircularJSON = require('circular-json');

app.get('/', async (req, res) => {
  try {
  let data =  await axios.get("https://musicbrainz.org/ws/2/release?artist=65f4f0c5-ef9e-490c-aee3-909e7ae6b2ab&limit=5&offset=5&fmt=json");
  const response = [];
     await Promise.all(JSON.parse(CircularJSON.stringify(data.data.releases)).map((item) => {

      const albums = {
        id: item.id,
        title: item.title,
        year: item.date,
       release_count: item["cover-art-archive"]["count"]
      }
      
      albums !== null && response.push(albums)
  }))

    res.send({
      albums: response})

  } catch(err) {
      console.log(err)
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})