import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Interview from './pages/Interview';
import Admin from './pages/Admin';
import CodePreview from './pages/CodePreview';

function App() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <nav className="bg-[#2a2a2a] p-4">
        <div className="max-w-4xl mx-auto flex gap-4">
          <Link 
            to="/" 
            className="text-white hover:text-gray-300 transition-colors"
          >
            Interview
          </Link>
          <Link 
            to="/admin" 
            className="text-white hover:text-gray-300 transition-colors"
          >
            Admin
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Interview />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/code-preview" element={<CodePreview />} />
      </Routes>
    </div>
  );
}

export default App;