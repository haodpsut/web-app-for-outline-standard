
import React from 'react';

const OverviewSection: React.FC = () => {
    return (
        <section id="overview" className="py-16 md:py-24 bg-white scroll-margin-top">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Tại sao là LLM và AI Tạo sinh?</h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Đây là thế hệ AI tiếp theo, cho phép máy tính hiểu và tạo ra ngôn ngữ, thay đổi hoàn toàn cách chúng ta làm việc với thông tin.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="bg-slate-50 p-8 rounded-xl card-hover">
                        <div className="text-purple-600 mb-4">
                            <i className="fas fa-comments text-4xl"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Xây dựng Chatbot thông minh</h3>
                        <p className="text-slate-600">Tạo ra các trợ lý ảo hiểu ngữ cảnh, trả lời các câu hỏi phức tạp và hỗ trợ khách hàng 24/7, giảm tải cho nhân viên.</p>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-xl card-hover">
                        <div className="text-purple-600 mb-4">
                            <i className="fas fa-magic-wand-sparkles text-4xl"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Tự động hóa nghiệp vụ</h3>
                        <p className="text-slate-600">Sử dụng LLM để tóm tắt báo cáo dài, soạn thảo email, phân tích hợp đồng, và trích xuất thông tin nhanh chóng từ văn bản.</p>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-xl card-hover">
                        <div className="text-purple-600 mb-4">
                            <i className="fas fa-lightbulb text-4xl"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Tư duy dựa trên Prompt</h3>
                        <p className="text-slate-600">Học kỹ năng quan trọng nhất: "ra lệnh" cho AI (Prompt Engineering) để nhận được kết quả chính xác và sáng tạo như mong muốn.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OverviewSection;
