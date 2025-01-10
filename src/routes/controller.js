const { extractPosts } = require('../utils/utils');
const { saveToJson } = require('../repo/repository')
const axios = require('axios')
require('dotenv').config();

const apiKey = process.env.RAPID_API_KEY;

async function getAllPosts(req, res) {
  try {
    // const username_or_id = req.params.username;
    const profileNames = ['learntogrow', 'therock'];
    const allPosts = [];

    for (const username of profileNames) {

      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://instagram-scraper-api3.p.rapidapi.com/user_reels?username_or_id=${username}`,
        headers: {
          'Content-Type': 'application/json',
          'x-rapidapi-key': apiKey,
          'x-rapidapi-host': 'instagram-scraper-api3.p.rapidapi.com'
        }
      };

      // Make the API call
      const response = await axios.request(config);
      const postList = extractPosts(response.data);

      // Combine all posts from each profile
      allPosts.push(postList);
    }

    // Save all posts to JSON file
    await saveToJson(allPosts);
    console.log('Data saved successfully');
    // res.status(200).json({allPosts});

  } catch (error) {
    console.error('Error fetching profile data:', error.response ? error.response.data : error.message);
    res.status(500).json({error: 'Failed to fetch data'});
  }
}

module.exports = { getAllPosts }