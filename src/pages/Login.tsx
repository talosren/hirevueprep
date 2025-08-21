import React, { useState } from 'react';
import { useAuthStore } from '../store/auth';
import { useNavigate } from 'react-router-dom';
import { ShootingStars } from '../components/ui/shooting-stars';
import { StarsBackground } from '../components/ui/stars-background';
import { User, Lock } from 'lucide-react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const success = await login(username, password);
    
    if (success) {
      navigate('/');
    } else {
      setError('Invalid credentials');
    }
    
    setIsLoading(false);
  };

  const handleJoinUs = () => {
    window.open('https://example.com/signup', '_blank');
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      <StarsBackground className="z-0" />
      <ShootingStars
        minSpeed={10}
        maxSpeed={30}
        minDelay={1200}
        maxDelay={4200}
        starColor="#9E00FF"
        trailColor="#2EB9DF"
        starWidth={10}
        starHeight={1}
        className="z-10"
      />
      
      <div className="relative z-20 w-full max-w-md p-6">
        <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
              Login
            </h1>
            <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-200"
                required
              />
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-200"
                required
              />
            </div>

            {error && (
              <div className="text-red-400 text-sm text-center bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                {error}
              </div>
            )}

            <div className="flex gap-4">
              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </button>
              
              <button
                type="button"
                onClick={handleJoinUs}
                className="flex-1 bg-gradient-to-r from-gray-700 to-gray-600 text-white py-3 px-6 rounded-xl hover:from-gray-600 hover:to-gray-500 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              >
                Join Us
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;