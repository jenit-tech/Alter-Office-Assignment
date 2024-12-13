import React from 'react';

const Post = ({ post }) => {
    return (
        <div>
            <p>{post.content}</p>
            {post.images && post.images.map((image, index) => (
                <img key={index} src={URL.createObjectURL(image)} alt="Post" />
            ))}
            <p>{new Date(post.timestamp).toLocaleString()}</p>
        </div>
    );
};

export default Post;