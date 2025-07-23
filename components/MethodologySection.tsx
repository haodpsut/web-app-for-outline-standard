
import React from 'react';

const MethodologySection: React.FC = () => {
    return (
        <section id="methodology" className="py-16 md:py-24 scroll-margin-top">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Phương pháp Đào tạo Thực chiến</h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Học thông qua giải quyết vấn đề, thực hành trực tiếp và học hỏi từ chuyên gia.</p>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-lg card-hover border-l-4 border-purple-600">
                        <h3 className="text-2xl font-bold mb-3 text-slate-800">1. Học tập dựa trên Vấn đề (PBL)</h3>
                        <p className="text-slate-600">Bắt đầu từ bài toán: "Làm sao để xây dựng một Chatbot trả lời 80% câu hỏi về sản phẩm thẻ tín dụng?" Học viên sẽ tìm hiểu về LLM để giải quyết nó.</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg card-hover border-l-4 border-green-600">
                        <h3 className="text-2xl font-bold mb-3 text-slate-800">2. Thực hành tại "Sân chơi Prompt"</h3>
                        <p className="text-slate-600">Cung cấp môi trường tương tác trực tiếp với các mô hình LLM. Học viên thử nghiệm, so sánh các câu lệnh và quan sát cách AI phản hồi để xây dựng trực giác.</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg card-hover border-l-4 border-blue-600">
                        <h3 className="text-2xl font-bold mb-3 text-slate-800">3. Đánh giá qua Dự án Ứng dụng</h3>
                        <p className="text-slate-600">Học viên sẽ thiết kế và trình bày một giải pháp LLM/Chatbot hoàn chỉnh, từ ý tưởng, lựa chọn công nghệ đến kế hoạch triển khai và tính toán ROI.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MethodologySection;
