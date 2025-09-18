import Sidebar from "./ui/Sidebar";
import React, { useState, useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Header from "./ui/Header";
import Spinner from "./ui/Spinner";

const MainLayout: React.FC = () => {
    const { user, isLoading } = useAuth();
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const openSidebar = () => setSidebarOpen(true);
    const closeSidebar = () => setSidebarOpen(false);

    // Auto-close sidebar on route change (mobile)
    useEffect(() => {
        if (isSidebarOpen) {
            const handleResize = () => {
                if (window.innerWidth >= 1024) {
                    setSidebarOpen(false);
                }
            };

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [isSidebarOpen]);

    // Handle ESC key to close sidebar
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isSidebarOpen) {
                closeSidebar();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isSidebarOpen]);

    // Prevent body scroll when sidebar is open on mobile
    useEffect(() => {
        if (isSidebarOpen && window.innerWidth < 1024) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isSidebarOpen]);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-900">
                <Spinner size={60} color="white" />
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className="relative flex min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
            <Sidebar
                role={user.role}
                isOpen={isSidebarOpen}
                onClose={closeSidebar}
            />

            {/* Overlay with improved animation */}
            <div
                className={`fixed inset-0 bg-black/60 z-20 lg:hidden transition-opacity duration-300 ${
                    isSidebarOpen 
                        ? 'opacity-100 pointer-events-auto' 
                        : 'opacity-0 pointer-events-none'
                }`}
                onClick={closeSidebar}
                aria-hidden="true"
            />

            <div className="flex flex-1 flex-col overflow-auto">
                <Header
                    role={user.role}
                    onMenuClick={openSidebar}
                    user={{
                        username: user.username,
                        email: user.email,
                        online: true
                    }}
                    title="Dashboard"
                    notificationsCount={0}
                />

                <main className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default MainLayout;