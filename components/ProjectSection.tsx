
import React from 'react';

const ProjectSection: React.FC = () => {
    return (
        <section id="project" className="py-16 md:py-24 bg-slate-800 text-white scroll-margin-top">
            <div className="container mx-auto px-6 text-center">
                 <h2 className="text-3xl md:text-4xl font-bold mb-4">Dự án Tốt nghiệp: Thiết kế Giải pháp AI Tạo sinh</h2>
                 <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-8">
                    Vận dụng toàn bộ kiến thức để xây dựng một kế hoạch chi tiết cho một Chatbot hoặc một công cụ LLM tự động hóa nghiệp vụ, sẵn sàng để trình bày trước hội đồng phê duyệt dự án.
                 </p>
                 <div className="bg-slate-700 p-8 rounded-xl max-w-4xl mx-auto text-left">
                    <h4 className="font-bold text-xl mb-4">Các tiêu chí đánh giá chính:</h4>
                    <ul className="space-y-3">
                        <li className="flex items-start"><i className="fas fa-check-circle text-green-400 mt-1 mr-3"></i><span><strong className="font-semibold">Giá trị Kinh doanh:</strong> Giải pháp giải quyết vấn đề gì? Tiết kiệm bao nhiêu chi phí hoặc mang lại bao nhiêu doanh thu?</span></li>
                        <li className="flex items-start"><i className="fas fa-check-circle text-green-400 mt-1 mr-3"></i><span><strong className="font-semibold">Thiết kế Kỹ thuật & Prompt:</strong> Lựa chọn công nghệ có hợp lý không? Các luồng hội thoại và prompt mẫu được thiết kế tốt không?</span></li>
                        <li className="flex items-start"><i className="fas fa-check-circle text-green-400 mt-1 mr-3"></i><span><strong className="font-semibold">Phân tích Rủi ro & Đạo đức:</strong> Đã nhận diện và có phương án xử lý các rủi ro về "ảo giác", thiên vị, và bảo mật dữ liệu chưa?</span></li>
                    </ul>
                 </div>
            </div>
        </section>
    );
};

export default ProjectSection;
