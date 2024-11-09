const express = require('express');

const { getAllPosts } = require('./controller.js');

const router = express.Router();

router.get('/posts/:username', getAllPosts);

module.exports = router;
