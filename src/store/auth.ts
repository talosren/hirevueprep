import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  username: string;
  role: string;
}

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  useGoogleSheets: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  toggleAuthMethod: () => void;
}

// Fake login data for testing
const fakeUsers = [
  { username: 'admin', password: 'admin123', role: 'admin' },
  { username: 'user', password: 'user123', role: 'user' },
  { username: 'test', password: 'test123', role: 'user' },
];

// Simulate Google Sheets API check
const checkGoogleSheetsAuth = async (username: string, password: string): Promise<User | null> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // For demo purposes, accept any username/password combination
  // In real implementation, this would call Google Sheets API
  if (username && password) {
    return { username, role: 'user' };
  }
  return null;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      useGoogleSheets: false, // Set to true to use Google Sheets API, false for local JSON

      login: async (username: string, password: string) => {
        const { useGoogleSheets } = get();

        try {
          let user: User | null = null;

          if (useGoogleSheets) {
            user = await checkGoogleSheetsAuth(username, password);
          } else {
            // Check against fake login data
            const foundUser = fakeUsers.find(
              u => u.username === username && u.password === password
            );
            if (foundUser) {
              user = { username: foundUser.username, role: foundUser.role };
            }
          }

          if (user) {
            set({ user, isAuthenticated: true });
            return true;
          }
          return false;
        } catch (error) {
          console.error('Login error:', error);
          return false;
        }
      },

      logout: () => {
        set({ user: null, isAuthenticated: false });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);
