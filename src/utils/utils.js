const fs=  require('fs')

function extractPosts(data) {
    const videoList = [];

    data.data.items.forEach(item => {
        videoList.push(item);
    });

    return videoList;
}

// function filterReels(posts) {
//     return posts.filter(item => item.product_type === 'clips');
// }

module.exports = { extractPosts }