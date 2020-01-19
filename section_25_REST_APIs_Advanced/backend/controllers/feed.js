exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [
            {
                _id: '1',
                title: 'First Post',
                content: 'This is the first post!',
                imageUrl: 'images/genius.jpg',
                creator: {
                    name: 'Andere Brian'
                },
                createdAt: new Date().toUTCString()
            },
            {
                _id: '2',
                title: 'Second Post',
                content: 'This is the second post!',
                imageUrl: 'images/genius.jpg',
                creator: {
                    name: 'Andere Brian II'
                },
                createdAt: new Date().toUTCString()
            }
        ]
    });
}

exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    //Create posts
    res.status(201).json({
        message: 'Post created successfully',
        post: { id: new Date().toISOString(), title: title, content: content }
    });
}