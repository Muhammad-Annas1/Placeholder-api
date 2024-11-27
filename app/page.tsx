// app/page.tsx

import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-red-500 via-pink-400 to-purple-500">
      <div className="text-center text-white">
        <h1 className="text-5xl font-extrabold text-shadow-lg">Welcome to the Posts App</h1>
        <p className="mt-4 text-xl font-sans">
          Fetch and view posts from the JSON Placeholder API with ease <br />
          UI Designed By Muhammad Annas❤️
        </p>
        <Link
          href="/fetch-posts"
          className="mt-8 inline-block px-8 py-4 text-lg font-semibold text-blue-800 bg-white rounded-full shadow-lg hover:bg-pink-200 transition duration-300"
        >
          View Posts
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
