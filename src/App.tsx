import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useAuthStore } from './store/auth';
import { ProtectedRoute } from './components/ProtectedRoute';
import Login from './pages/Login';
import Interview from './pages/Interview';
import Admin from './pages/Admin';
import CodePreview from './pages/CodePreview';
import { LogOut } from 'lucide-react';

function App() {
  const { isAuthenticated, user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      {isAuthenticated && (
        <nav className="bg-[#2a2a2a] p-4">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <div className="flex gap-4">
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
            <div className="flex items-center gap-4">
              <span className="text-gray-300">Welcome, {user?.username}</span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </nav>
      )}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <ProtectedRoute>
            <Interview />
          </ProtectedRoute>
        } />
        <Route path="/admin" element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        } />
        <Route path="/code-preview" element={
          <ProtectedRoute>
            <CodePreview />
          </ProtectedRoute>
        } />
      </Routes>
    </div>
  );
}

export default App;
