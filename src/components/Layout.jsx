import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'text-teal-400 bg-white/10' : 'text-slate-300 hover:text-white hover:bg-white/5';
    };

    return (
        <div className="min-h-screen bg-black text-slate-100">
            <nav className="fixed top-0 left-0 right-0 z-50 glass border-b-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-8">
                            <Link to="/" className="text-xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                                Anatomy Thai
                            </Link>
                            <div className="hidden md:block">
                                <div className="flex items-baseline space-x-2">
                                    <Link to="/" className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${isActive('/')}`}>
                                        หน้าหลัก
                                    </Link>
                                    <Link to="/movements" className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${isActive('/movements')}`}>
                                        การเคลื่อนไหว
                                    </Link>
                                    <Link to="/structures" className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${isActive('/structures')}`}>
                                        โครงสร้าง
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
