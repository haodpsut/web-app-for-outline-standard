
import React from 'react';

const HeroSection: React.FC = () => {
    const handleDiscoverClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetElement = document.querySelector("#curriculum");
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="gradient-bg text-white py-20 md:py-32">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">Ứng dụng LLM & AI Tạo sinh trong Ngân hàng</h1>
                <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                    Làm chủ Mô hình Ngôn ngữ Lớn (LLM) và Chatbot AI để tự động hóa nghiệp vụ và kiến tạo trải nghiệm khách hàng vượt trội.
                </p>
                <a href="#curriculum" onClick={handleDiscoverClick} className="bg-white text-purple-700 font-bold py-3 px-8 rounded-full hover:bg-slate-100 transition-transform transform hover:scale-105 text-lg cursor-pointer">
                    Khám phá chương trình
                </a>
            </div>
        </section>
    );
};

export default HeroSection;
