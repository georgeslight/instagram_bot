const fs = require('fs').promises;
const path = require('path');

async function saveToJson(posts) {
    try {
        const filePath = path.join(__dirname, '../../data/output.json');
        await fs.writeFile(filePath, JSON.stringify(posts, null, 2));
    } catch (error) {
        throw new Error(`Error saving data to file: ${error.message}`);
    }
}

module.exports= { saveToJson }