import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { demoAccounts } from '../data/users';

// NOTE ON REAL-BACKEND INTEGRATION:
// This context currently reads/writes a mock "session" to localStorage and
// checks credentials against the demoAccounts list. To connect a real API,
// replace `login`/`register` below with calls to POST /api/auth/login and
// POST /api/auth/register, store the returned JWT instead of the mock user
// object, and decode the role from the token instead of the mock record.

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('lms_session');
    return stored ? JSON.parse(stored) : null;
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) localStorage.setItem('lms_session', JSON.stringify(user));
    else localStorage.removeItem('lms_session');
  }, [user]);

  const login = async (email, password) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 500)); // simulate network
    setLoading(false);
    const match = demoAccounts.find((a) => a.email.toLowerCase() === email.toLowerCase() && a.password === password);
    if (!match) {
      throw new Error('Invalid email or password. Try one of the demo accounts below.');
    }
    const { password: _pw, ...safeUser } = match;
    setUser(safeUser);
    return safeUser;
  };

  const loginAs = (role) => {
    const match = demoAccounts.find((a) => a.role === role);
    const { password: _pw, ...safeUser } = match;
    setUser(safeUser);
    return safeUser;
  };

  const register = async ({ name, email, role }) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 500));
    setLoading(false);
    const newUser = {
      id: `u-${Date.now()}`,
      name,
      email,
      role: role || 'student',
      avatar: `https://i.pravatar.cc/160?u=${encodeURIComponent(email)}`,
      pendingApproval: role === 'instructor',
    };
    setUser(newUser);
    return newUser;
  };

  const logout = () => setUser(null);

  const value = useMemo(() => ({ user, loading, login, loginAs, register, logout }), [user, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
