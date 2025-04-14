
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { playSound } from '@/utils/soundUtils';

interface User {
  name: string;
  email: string;
  avatar: string;
}

interface AuthContextType {
  isAuth: boolean;
  user: User | null;
  login: (email: string, password: string) => void;
  loginWithGoogle: () => void;
  register: (name: string, email: string, password: string) => void;
  logout: () => void;
}

const defaultUser = {
  name: "User",
  email: "user@example.com",
  avatar: "/placeholder.svg"
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// The Google Authentication window setup
const setupGoogleAuth = () => {
  // This would be replaced with actual Google OAuth implementation
  // For this example, we'll create a simple popup that simulates Google authentication
  const googleAuth = (callback: (email: string, name: string) => void) => {
    console.log("Setting up Google Auth with popup");
    // Create a centered popup window
    const width = 500;
    const height = 600;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;
    
    const popup = window.open(
      "about:blank",
      "Google Login",
      `width=${width},height=${height},left=${left},top=${top},resizable,scrollbars=yes,status=1`
    );
    
    if (popup) {
      popup.document.write(`
        <html>
          <head>
            <title>Google Sign In</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100vh;
                margin: 0;
                background-color: #f0f0f0;
              }
              .container {
                background: white;
                padding: 40px;
                border-radius: 8px;
                box-shadow: 0 4px 10px rgba(0,0,0,0.1);
                text-align: center;
              }
              h1 {
                color: #4285F4;
                margin-bottom: 20px;
              }
              .google-logo {
                margin-bottom: 20px;
                width: 80px;
              }
              input {
                width: 100%;
                padding: 12px;
                margin-bottom: 16px;
                border: 1px solid #ddd;
                border-radius: 4px;
                box-sizing: border-box;
                font-size: 14px;
              }
              button {
                background-color: #4285F4;
                color: white;
                border: none;
                padding: 12px 24px;
                border-radius: 4px;
                cursor: pointer;
                font-size: 16px;
                transition: background-color 0.3s;
                width: 100%;
              }
              button:hover {
                background-color: #357ae8;
              }
              .form-group {
                margin-bottom: 16px;
                text-align: left;
              }
              label {
                display: block;
                margin-bottom: 8px;
                font-weight: 500;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <svg class="google-logo" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <h1>Google Sign In</h1>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="you@example.com" value="user@gmail.com">
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="••••••••">
              </div>
              <button id="loginBtn">Sign in with Google</button>
            </div>
            <script>
              document.getElementById('loginBtn').addEventListener('click', function() {
                const email = document.getElementById('email').value || 'user@gmail.com';
                const name = email.split('@')[0].split('.').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                window.opener.postMessage({ 
                  type: 'GOOGLE_LOGIN_SUCCESS',
                  email: email,
                  name: name
                }, '*');
                window.close();
              });
            </script>
          </body>
        </html>
      `);
      
      // Set up the message listener
      const handleMessage = (event: MessageEvent) => {
        if (event.data && event.data.type === 'GOOGLE_LOGIN_SUCCESS') {
          window.removeEventListener('message', handleMessage);
          if (popup) popup.close();
          callback(event.data.email, event.data.name);
        }
      };
      
      window.addEventListener('message', handleMessage);
      
      // Fallback for popup blocked or closed
      const checkClosed = setInterval(() => {
        if (popup && popup.closed) {
          clearInterval(checkClosed);
          window.removeEventListener('message', handleMessage);
        }
      }, 1000);
    } else {
      console.error("Popup blocked or failed to open");
      alert("Popup blocked. Please allow popups for this site to use Google login.");
    }
  };

  return { googleAuth };
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const { googleAuth } = setupGoogleAuth();

  // Check for existing login session on startup
  useEffect(() => {
    const savedUserString = localStorage.getItem('user');
    const savedIsAuth = localStorage.getItem('isAuth') === 'true';
    
    if (savedUserString && savedIsAuth) {
      try {
        const savedUser = JSON.parse(savedUserString);
        setUser(savedUser);
        setIsAuth(true);
      } catch (error) {
        console.error('Error parsing saved user data', error);
        localStorage.removeItem('user');
        localStorage.removeItem('isAuth');
      }
    }
  }, []);

  const saveUserSession = (user: User) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('isAuth', 'true');
  };

  const clearUserSession = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('isAuth');
  };

  const login = (email: string, password: string) => {
    console.log("Login attempt:", { email, password });
    const user = {
      ...defaultUser,
      name: email.split('@')[0].split('.').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
      email: email
    };
    
    setIsAuth(true);
    setUser(user);
    saveUserSession(user);
    playSound("success");
  };

  const loginWithGoogle = () => {
    console.log("Google login clicked");
    playSound("click");
    
    googleAuth((email, name) => {
      // This callback runs after successful Google login
      const googleUser = {
        name: name,
        email: email,
        avatar: "/placeholder.svg"
      };
      
      setIsAuth(true);
      setUser(googleUser);
      saveUserSession(googleUser);
      playSound("success");
    });
  };

  const register = (name: string, email: string, password: string) => {
    console.log("Registration:", { name, email, password });
    const newUser = { 
      ...defaultUser, 
      name, 
      email 
    };
    
    setIsAuth(true);
    setUser(newUser);
    saveUserSession(newUser);
    playSound("success");
  };

  const logout = () => {
    setIsAuth(false);
    setUser(null);
    clearUserSession();
    playSound("click");
  };

  return (
    <AuthContext.Provider value={{ isAuth, user, login, loginWithGoogle, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};