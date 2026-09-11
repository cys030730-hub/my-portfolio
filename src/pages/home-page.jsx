import HeroSection from '../components/landing/hero-section.jsx';
import AboutSection from '../components/landing/about-section.jsx';
import SkillTreeSection from '../components/landing/skill-tree-section.jsx';
import ProjectsSection from '../components/landing/projects-section.jsx';
import ContactSection from '../components/landing/contact-section.jsx';

/**
 * HomePage 컴포넌트
 *
 * Hero, About Me, Skill Tree, Projects, Contact 5개 섹션으로 구성된 홈 페이지.
 *
 * Example usage:
 * <HomePage />
 */
function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillTreeSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}

export default HomePage;
