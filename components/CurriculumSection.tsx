
import React from 'react';

const CurriculumSection: React.FC = () => {
    return (
        <section id="curriculum" className="py-16 md:py-24 bg-white scroll-margin-top">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Chương trình học chi tiết</h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">4 học phần để bạn từ một người dùng trở thành người kiến tạo giải pháp với AI tạo sinh.</p>
                </div>

                <div className="space-y-12">
                    {/* Module 1 */}
                    <div className="grid md:grid-cols-12 gap-8 items-center">
                        <div className="md:col-span-1 bg-slate-100 p-6 rounded-xl text-center hidden md:block">
                            <div className="text-purple-600 text-5xl font-bold">1</div>
                            <div className="font-semibold text-slate-700 mt-2">Học phần</div>
                        </div>
                        <div className="md:col-span-11 bg-slate-50 p-8 rounded-xl border border-slate-200">
                            <h3 className="text-2xl font-bold text-purple-800 mb-4">Nền tảng AI Tạo sinh & Kỹ thuật Prompt</h3>
                            <p className="text-slate-600 mb-6">Hiểu LLM là gì, hoạt động ra sao (một cách đơn giản) và làm chủ nghệ thuật "giao tiếp" với AI để khai thác tối đa sức mạnh của chúng.</p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-slate-700 mb-2"><i className="fas fa-book-open mr-2 text-purple-500"></i>Nội dung chính:</h4>
                                    <ul className="list-disc list-inside text-slate-600 space-y-1">
                                        <li>Giới thiệu AI Tạo sinh & LLMs (GPT, Gemini...).</li>
                                        <li>Kỹ thuật Prompt Engineering: Các nguyên tắc và mẹo.</li>
                                        <li>Xác định các cơ hội ứng dụng LLM trong ngân hàng.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-700 mb-2"><i className="fas fa-keyboard mr-2 text-purple-500"></i>Hoạt động & Đánh giá:</h4>
                                    <ul className="list-disc list-inside text-slate-600 space-y-1">
                                        <li>Thực hành trên "Sân chơi Prompt".</li>
                                        <li>Bài nộp: "Phân tích cơ hội ứng dụng Chatbot".</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Module 2 */}
                    <div className="grid md:grid-cols-12 gap-8 items-center">
                         <div className="md:col-span-1 bg-slate-100 p-6 rounded-xl text-center hidden md:block">
                            <div className="text-green-600 text-5xl font-bold">2</div>
                            <div className="font-semibold text-slate-700 mt-2">Học phần</div>
                        </div>
                        <div className="md:col-span-11 bg-slate-50 p-8 rounded-xl border border-slate-200">
                            <h3 className="text-2xl font-bold text-green-800 mb-4">Tự động hóa Nghiệp vụ & Vận hành với LLM</h3>
                            <p className="text-slate-600 mb-6">Ứng dụng LLM để xử lý các công việc liên quan đến văn bản, dữ liệu phi cấu trúc, giúp tăng năng suất và giảm thiểu sai sót thủ công.</p>
                             <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-slate-700 mb-2"><i className="fas fa-cogs mr-2 text-green-500"></i>Nội dung chính:</h4>
                                    <ul className="list-disc list-inside text-slate-600 space-y-1">
                                        <li>Tự động tạo báo cáo, tóm tắt tài liệu.</li>
                                        <li>Phân tích, trích xuất thông tin từ hợp đồng, hồ sơ.</li>
                                        <li>Xây dựng hệ thống Hỏi-Đáp nội bộ (Internal Q&A).</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-700 mb-2"><i className="fas fa-file-alt mr-2 text-green-500"></i>Hoạt động & Đánh giá:</h4>
                                    <ul className="list-disc list-inside text-slate-600 space-y-1">
                                        <li>Case study: Tự động hóa quy trình báo cáo tuân thủ.</li>
                                        <li>Nộp "Đề xuất giải pháp LLM cho vận hành".</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Module 3 */}
                    <div className="grid md:grid-cols-12 gap-8 items-center">
                         <div className="md:col-span-1 bg-slate-100 p-6 rounded-xl text-center hidden md:block">
                            <div className="text-blue-600 text-5xl font-bold">3</div>
                            <div className="font-semibold text-slate-700 mt-2">Học phần</div>
                        </div>
                        <div className="md:col-span-11 bg-slate-50 p-8 rounded-xl border border-slate-200">
                            <h3 className="text-2xl font-bold text-blue-800 mb-4">Kiến tạo Trải nghiệm Khách hàng bằng Chatbot AI</h3>
                            <p className="text-slate-600 mb-6">Thiết kế và xây dựng các Chatbot thông minh có khả năng đối thoại tự nhiên, giải quyết vấn đề cho khách hàng và tạo ra các chiến dịch marketing siêu cá nhân hóa.</p>
                             <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-slate-700 mb-2"><i className="fas fa-chart-line mr-2 text-blue-500"></i>Nội dung chính:</h4>
                                    <ul className="list-disc list-inside text-slate-600 space-y-1">
                                        <li>Kiến trúc của một Chatbot AI hiện đại.</li>
                                        <li>Kỹ thuật RAG (Retrieval-Augmented Generation).</li>
                                        <li>Sáng tạo nội dung marketing bằng AI tạo sinh.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-700 mb-2"><i className="fas fa-users mr-2 text-blue-500"></i>Hoạt động & Đánh giá:</h4>
                                    <ul className="list-disc list-inside text-slate-600 space-y-1">
                                        <li>Workshop: Thiết kế luồng hội thoại cho Chatbot.</li>
                                        <li>Nộp "Khung thiết kế Chatbot dịch vụ khách hàng".</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Module 4 */}
                    <div className="grid md:grid-cols-12 gap-8 items-center">
                         <div className="md:col-span-1 bg-slate-100 p-6 rounded-xl text-center hidden md:block">
                            <div className="text-red-600 text-5xl font-bold">4</div>
                            <div className="font-semibold text-slate-700 mt-2">Học phần</div>
                        </div>
                        <div className="md:col-span-11 bg-slate-50 p-8 rounded-xl border border-slate-200">
                            <h3 className="text-2xl font-bold text-red-800 mb-4">Chiến lược, Đạo đức & Triển khai LLM</h3>
                            <p className="text-slate-600 mb-6">Tổng hợp kiến thức, tìm hiểu các rủi ro đặc thù của LLM (ảo giác, thiên vị, bảo mật) và cách xây dựng một lộ trình triển khai có trách nhiệm, hiệu quả.</p>
                             <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-slate-700 mb-2"><i className="fas fa-balance-scale mr-2 text-red-500"></i>Nội dung chính:</h4>
                                    <ul className="list-disc list-inside text-slate-600 space-y-1">
                                        <li>AI có trách nhiệm: Hallucination, Bias, Privacy.</li>
                                        <li>Lựa chọn mô hình: In-house vs. API (OpenAI, Google).</li>
                                        <li>Cách tính toán ROI cho dự án LLM/Chatbot.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-700 mb-2"><i className="fas fa-trophy mr-2 text-red-500"></i>Hoạt động & Đánh giá:</h4>
                                    <ul className="list-disc list-inside text-slate-600 space-y-1">
                                        <li>Thảo luận: "Tình huống đạo đức của LLM".</li>
                                        <li>Trình bày Dự án Cuối khóa (Capstone).</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CurriculumSection;
