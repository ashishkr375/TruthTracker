import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5 bg-cover" style={{ backgroundImage: 'url(/background.jpg)' }}>
      <h1 className="text-4xl font-bold mb-5 text-blue-600">Welcome to TruthTracker</h1>
      <p className="text-lg mb-5 text-gray-800 text-center">
        Your go-to platform for uncovering the truth behind news and video content! 
        Leverage advanced AI technologies to assess the authenticity of information.
      </p>
      <h2 className="text-2xl font-semibold text-blue-500 mb-3">Get Your News Authenticity!</h2>
      <p className="mb-5 text-gray-700 text-center">
        With our state-of-the-art models, we analyze video and news content in real-time. 
        Our process includes:
      </p>
      <ul className="list-none list-inside mb-5 text-gray-700">
        <li>AI-Powered Analysis: Using the latest LLM models for deep learning insights.</li>
        <li>Comprehensive Fact-Checking: Cross-referencing with verified news sources.</li>
        <li>Real-Time Transcription: Converting audio to text for quick assessment.</li>
        <li>Data Validation: Ensuring the integrity and accuracy of all reports.</li>
      </ul>
      <div className="flex space-x-4">
        <Link href="/Video">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">📸 Video Investigate</button>
        </Link>
        <Link href="/News">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">📰 News Investigate</button>
        </Link>
      </div>
      <p className="mt-5 text-gray-600 text-center">
        Join us in the fight against misinformation and elevate your news literacy today!
      </p>
    </div>
  );
};

export default Home;
