const express = require('express');

const cors = require('cors');

const router = require('./routes/router.js');
const { schedule } = require("node-cron");
const { getAllPosts } = require('./routes/controller.js');

const app = express();

// app.use(
//     cors({
//         // origin: 'http://localhost:3000',
//     })
// );

// Schedule the task to run once a day at midnight (MM, HH)
schedule('31 18 * * *', async () => {
    console.log('Running the scheduled job at midnight');
    try {
        await getAllPosts();
        console.log("Job completed successfully");
    } catch (error) {
        console.error("Error running the scheduler job: ", error.message);
    }
});

app.use(express.json());
app.use(router);

module.exports = app;
