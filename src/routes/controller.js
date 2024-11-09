const { posts } = require('../utils/utils');
const { saveToJson } = require('../repo/repository')
const axios = require('axios')

async function getAllPosts(req, res) {
  try {
    const username_or_id = req.params.username;

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://instagram-scraper-api3.p.rapidapi.com/user_posts?username_or_id=${username_or_id}&count=12`,
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-key': '8d3082bea7mshe7f55685ef0262fp177b56jsn6f35636f88c9'
      }
    };

    // Make the API call
    const response = await axios.request(config);

    const postList = posts(response.data)

      await saveToJson(postList);

    res.status(200).json({postList});
  } catch (error) {
    console.error('Error fetching profile data:', error.response ? error.response.data : error.message);
    res.status(500).json({error: 'Failed to fetch data'});
  }
}

module.exports = { getAllPosts }