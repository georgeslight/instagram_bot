function extractPosts(data) {
    const videoList = [];

    data.data.items.forEach(item => {
        videoList.push(item);
    });

    return videoList;
}

module.exports = { posts: extractPosts }