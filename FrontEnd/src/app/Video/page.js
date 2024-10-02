"use client";
import { useState } from 'react';

export default function Home() {
  const [videoUrl, setVideoUrl] = useState('');
  const [processSteps, setProcessSteps] = useState([]);
  const [reportMessage, setReportMessage] = useState('');

  const handleSubmit = async () => {
    setProcessSteps([]); // Clear previous steps
    setReportMessage(''); // Clear previous report message

    const steps = [
      { name: 'Uploading video to server...', completed: false },
      { name: 'Transcribing video...', completed: false },
      { name: 'Sending data to LLM model...', completed: false },
      { name: 'Fetching news and data...', completed: false },
      { name: 'Generating report...', completed: false },
    ];

    // Initialize the process steps
    setProcessSteps(steps);

    // Simulate asynchronous behavior (replace with actual processing logic)
    for (let i = 0; i < steps.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait 2 seconds

      // Update the completed step
      setProcessSteps((prevSteps) =>
        prevSteps.map((prevStep, index) => 
          index === i ? { ...prevStep, completed: true } : prevStep
        )
      );
    }

    // Generate a random accuracy percentage between 90 and 98
    const accuracy = Math.floor(Math.random() * 9) + 90;

    // Set the report message
    setReportMessage(`Your News report is approximately ${accuracy}% Correct. View Detailed Report {Coming soon}`);
    
    // Final step: Mark as completed
    setProcessSteps((prevSteps) =>
      prevSteps.map((prevStep, index) => 
        index === steps.length - 1 ? { ...prevStep, completed: true } : prevStep
      )
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5 bg-gray-100" style={{ backgroundImage: "url('/background.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="200px">
          <g id="SVGRepo_iconCarrier">
            <path fillRule="evenodd" clipRule="evenodd" d="M15.3276 7.54199H8.67239C5.29758 7.54199 3.61017 7.54199 2.66232 8.52882C1.71447 9.51565 1.93748 11.0403 2.38351 14.0895L2.80648 16.9811C3.15626 19.3723 3.33115 20.5679 4.22834 21.2839C5.12553 21.9999 6.4488 21.9999 9.09534 21.9999H14.9046C17.5512 21.9999 18.8745 21.9999 19.7717 21.2839C20.6689 20.5679 20.8437 19.3723 21.1935 16.9811L21.6165 14.0895C22.0625 11.0403 22.2855 9.51564 21.3377 8.52882C20.3898 7.54199 18.7024 7.54199 15.3276 7.54199ZM14.5812 15.7942C15.1396 15.448 15.1396 14.5519 14.5812 14.2057L11.2096 12.1156C10.6669 11.7792 10 12.2171 10 12.9098V17.0901C10 17.7828 10.6669 18.2207 11.2096 17.8843L14.5812 15.7942Z" fill="#4960ab"></path>
            <path opacity="0.4" d="M8.50956 2.00001H15.4897C15.7221 1.99995 15.9004 1.99991 16.0562 2.01515C17.164 2.12352 18.0708 2.78958 18.4553 3.68678H5.54395C5.92846 2.78958 6.83521 2.12352 7.94303 2.01515C8.09884 1.99991 8.27708 1.99995 8.50956 2.00001Z" fill="#4960ab"></path>
            <path opacity="0.7" d="M6.3102 4.72266C4.91958 4.72266 3.77931 5.56241 3.39878 6.67645C3.39085 6.69967 3.38325 6.72302 3.37598 6.74647C3.77413 6.6259 4.18849 6.54713 4.60796 6.49336C5.68833 6.35485 7.05367 6.35492 8.6397 6.35501H15.5318C17.1178 6.35492 18.4832 6.35485 19.5635 6.49336C19.983 6.54713 20.3974 6.6259 20.7955 6.74647C20.7883 6.72302 20.7806 6.69967 20.7727 6.67645C20.3922 5.56241 19.2519 4.72266 17.8613 4.72266H6.3102Z" fill="#4960ab"></path>
          </g>
        </svg>
      </div>
      <h1 className="text-3xl font-bold mb-5 text-blue-600 mt-5">Ensure Authenticity: Validate Your News Reports!</h1>

      <div className="flex flex-col space-y-3">
        <input
          type="text"
          placeholder="Enter video URL"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          className="p-2 border border-gray-300 text-neutral-600 rounded mb-3 w-72 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        />

        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </div>

      {processSteps.length > 0 && (
        <div className="mt-5 space-y-2">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center space-x-2 text-lg p-2 rounded border border-gray-300 ${
                step.completed ? 'bg-green-100 text-green-600' : 'bg-gray-200 text-gray-700'
              }`}
            >
              {step.completed ? "✅" : <span className="animate-spin">⏳</span>}
              <p>{step.name}</p>
            </div>
          ))}
        </div>
      )}

      {reportMessage && (
        <div className="mt-5 text-xl font-semibold text-blue-600">
          {reportMessage}
        </div>
      )}
    </div>
  );
}
