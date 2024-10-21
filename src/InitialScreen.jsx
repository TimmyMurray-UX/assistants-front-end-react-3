import React from "react";

function InitialScreen({ setPendingPrompt, openModal }) {
  const handleExamplePrompt = (prompt) => {
    setPendingPrompt(prompt); // Set the prompt, but don't populate the input yet
    openModal(); // Open the file upload modal
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-full p-6 text-center space-y-4"
      role="main"
      aria-labelledby="assistant-title"
    >
      <img
        src="https://harvard-openai-assistants.s3.amazonaws.com/assets/Harvard_University_shield.svg"
        alt="Harvard University shield"
        className="w-24 h-24 object-contain"
        aria-hidden="true"
      />
      <h1 id="assistant-title" className="text-2xl font-semibold text-gray-800">
        AI Assistant
      </h1>
      <p className="text-gray-600 max-w-md" aria-live="polite">
        I'm your assistant! I can help you with a variety of tasks, such as
        answering questions, providing recommendations, and more.
      </p>
      <div className="space-y-2 space-x-2">
        <button
          className="bg-gray-700 text-white rounded-full px-4 py-2 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
          onClick={() =>
            handleExamplePrompt(
              "Describe this document's key points in bullet points, and provide a one paragraph worded summary of the document in a separate section."
            )
          }
          aria-label="Summarize DUA document"
        >
          Summarize DUA
        </button>
        <button
          className="bg-gray-700 text-white rounded-full px-4 py-2 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
          onClick={() =>
            handleExamplePrompt(
              "Taking into account the agreement_metadata.json, match the DUA file with the appropriate JSON entry, and extract the 'Days Submit to Active', and any other start and end date fields."
            )
          }
          aria-label="Extract DUA metadata"
        >
          DUA Estimated Time
        </button>
        <button
          className="bg-gray-700 text-white rounded-full px-4 py-2 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
          onClick={() =>
            handleExamplePrompt(
              "What has changed in the DUA between the document I am providing as part of the context and the file(s) available in your storage? Pull out the information into sections and BOLD anything that has been added or removed."
            )
          }
          aria-label="Redline changes in DUA"
        >
          Redline
        </button>
      </div>
    </div>
  );
}

export default InitialScreen;
