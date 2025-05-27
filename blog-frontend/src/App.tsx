import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { Feed } from './pages/Feed'
import { SideBar } from './components/SideBar'
import { Profile } from './pages/Profile'
import { Login } from './pages/Login'
import { AuthProvider } from './contexts/AuthContext'
import { ProtectedRoute } from './components/ProtectedRoute'
import { useAuth } from './contexts/AuthContext'

const AppContent = () => {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
            {isAuthenticated && (
                <SideBar
                    onNavigate={(page) => {
                        navigate(`/${page}`);
                    }}
                    onLogout={logout}
                />
            )}
            <Routes>
                <Route path="/" element={<Navigate to="/feed" replace />} />
                <Route
                    path="/feed"
                    element={
                        <ProtectedRoute>
                            <Feed />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/login"
                    element={
                        isAuthenticated ? <Navigate to="/feed" replace /> : <Login />
                    }
                />
            </Routes>
        </div>
    );
};


function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <AppContent />
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
