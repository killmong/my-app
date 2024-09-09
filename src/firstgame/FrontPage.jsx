import React from "react";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-xl font-bold">Pathfinder Learning Interface</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#topics" className="hover:underline">Topics</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 container mx-auto py-12 px-6 flex">
        {/* Sidebar */}
        <aside className="w-1/4 bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Select a Topic</h2>
          <ul className="space-y-4">
            <li><a href="#" className="text-blue-600 hover:underline">HTML Basics</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">CSS Fundamentals</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">JavaScript Introduction</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">React Basics</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Node.js Overview</a></li>
          </ul>
        </aside>

        {/* Main Content Section */}
        <section className="flex-1 bg-white p-8 ml-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Welcome to Pathfinder Learning</h2>
          <p className="mb-6">
            Select a topic from the sidebar to start learning. Each topic contains a step-by-step guide to help
            you understand the fundamentals and advanced concepts.
          </p>
          <p>
            This interface is designed to be intuitive and easy to follow, similar to W3Schools' Pathfinder. 
            You can explore various topics and learn at your own pace.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          &copy; 2024 Pathfinder Learning. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
