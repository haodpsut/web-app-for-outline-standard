
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import OverviewSection from './components/OverviewSection';
import MethodologySection from './components/MethodologySection';
import CurriculumSection from './components/CurriculumSection';
import ProjectSection from './components/ProjectSection';
import EnrollmentSection from './components/EnrollmentSection';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <OverviewSection />
                <MethodologySection />
                <CurriculumSection />
                <ProjectSection />
                <EnrollmentSection />
            </main>
            <Footer />
        </>
    );
};

export default App;
