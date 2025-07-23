
import React from 'react';

const Header: React.FC = () => {

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        if (targetId) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    };
    
    return (
        <header className="bg-white/80 backdrop-blur-lg shadow-md sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-xl font-bold text-slate-800">
                    <i className="fas fa-robot text-purple-600"></i> LLM for Bankers
                </div>
                <div className="hidden md:flex items-center space-x-8 font-semibold">
                    <a href="#overview" onClick={handleNavClick} className="hover:text-purple-600 transition-colors">Tổng quan</a>
                    <a href="#curriculum" onClick={handleNavClick} className="hover:text-purple-600 transition-colors">Chương trình học</a>
                    <a href="#methodology" onClick={handleNavClick} className="hover:text-purple-600 transition-colors">Phương pháp</a>
                    <a href="#project" onClick={handleNavClick} className="hover:text-purple-600 transition-colors">Dự án cuối khóa</a>
                </div>
                <a href="#enroll" onClick={handleNavClick} className="bg-purple-600 text-white font-bold py-2 px-6 rounded-full hover:bg-purple-700 transition-transform transform hover:scale-105">
                    Đăng ký
                </a>
            </nav>
        </header>
    );
};

export default Header;
