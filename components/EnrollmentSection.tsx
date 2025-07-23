
import React from 'react';

const EnrollmentSection: React.FC = () => {
    return (
        <section id="enroll" className="py-20 md:py-24 bg-white scroll-margin-top">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Sẵn sàng làm chủ Công nghệ AI của Tương lai?</h2>
                <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto mb-8">
                    Đăng ký ngay để trở thành chuyên gia tiên phong ứng dụng LLM và AI Tạo sinh trong ngành ngân hàng.
                </p>
                <button className="bg-purple-600 text-white font-bold py-4 px-10 rounded-full hover:bg-purple-700 transition-transform transform hover:scale-105 text-xl shadow-lg hover:shadow-xl">
                    Đăng ký Khóa học
                </button>
            </div>
        </section>
    );
};

export default EnrollmentSection;
