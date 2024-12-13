import React, { useEffect, useState } from 'react';
import { db } from '../../firebase/firebaseConfig';
import { collection, query, orderBy, limit, getDocs, startAfter } from 'firebase/firestore';
import Post from './Post';

const InfiniteScroll = () => {
    const [posts, setPosts] = useState([]);
    const [lastVisible, setLastVisible] = useState(null);
    const [loading, setLoading] = useState(false);

    // Fetch posts from Firestore
    const fetchPosts = async () => {
        setLoading(true);
        const postsRef = collection(db, 'posts');
        // Initial query or subsequent query with pagination
        let q;
        if (lastVisible) {
            q = query(postsRef, orderBy('timestamp', 'desc'), startAfter(lastVisible), limit(20));
        } else {
            q = query(postsRef, orderBy('timestamp', 'desc'), limit(20));
        }

        const documentSnapshots = await getDocs(q);
        const newPosts = documentSnapshots.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        setPosts(prev => [...prev, ...newPosts]); // Append the new posts
        setLastVisible(documentSnapshots.docs[documentSnapshots.docs.length - 1]); // Set the last visible document for pagination
        setLoading(false);
    };

    // Initial data load when the component is mounted
    useEffect(() => {
        fetchPosts();
    }, []);

    // Handle scroll event to trigger fetching more posts when reaching the bottom
    const handleScroll = (e) => {
        const bottom = e.target.scrollHeight === e.target.scrollTop + e.target.clientHeight;
        if (bottom && !loading) {
            fetchPosts();
        }
    };

    return (
        <div onScroll={handleScroll} style={{ overflowY: 'auto', height: '80vh' }}>
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
            {loading && <p>Loading more posts...</p>}
        </div>
    );
};

export default InfiniteScroll;
