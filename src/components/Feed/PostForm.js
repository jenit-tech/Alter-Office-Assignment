import React, { useState } from 'react';
import { db } from '../../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const PostForm = () => {
    const [content, setContent] = useState('');
    const [images, setImages] = useState([]);

    const handlePost = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, 'posts'), {
                content,
                images,
                timestamp: new Date(),
            });
            setContent('');
            setImages([]);
        } catch (error) {
            console.error(error);
        }
    };

    const handleImageChange = (e) => {
        setImages([...e.target.files]);
    };

    return (
        <form onSubmit={handlePost}>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="What's on your mind?" />
            <input type="file" multiple onChange={handleImageChange} />
            <button type="submit">Post</button>
        </form>
    );
};

export default PostForm;