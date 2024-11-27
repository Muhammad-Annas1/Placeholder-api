'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const FetchPostsPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/external');

      if (!response.ok) {
        setError(`Error fetching posts: ${response.statusText}`);
        setLoading(false);
        return;
      }

      try {
        const data = await response.json();
        setPosts(data);
      } catch (error: any) {
        setError(`Oops! Something went wrong while parsing the posts: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="text-lg text-gray-700">Loading posts...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="text-lg text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gradient-to-r from-red-500 via-pink-400 to-purple-500 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Posts</h1>

      <div className="flex justify-center mb-8">
        <Link href="/">
          <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors">
            Back to Homepage
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-6 bg-white border border-indigo-300 rounded-xl shadow-xl hover:shadow-2xl hover:bg-pink-100 transition-all duration-300"
          >
            <h2 className="text-xl font-semibold text-indigo-800">{post.title}</h2>
            <p className="mt-3 text-gray-700">{post.body}</p>
            <div className="mt-4 text-sm text-gray-500">
              <span className="font-medium text-gray-600">User ID:</span> {post.userId}
            </div>
            <div className="mt-2 text-sm text-gray-500">
              <span className="font-medium text-gray-600">ID:</span> {post.id}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchPostsPage;
