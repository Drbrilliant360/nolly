import { ContactProvider } from './context/ContactProvider'
import { ProjectModalProvider } from './context/ProjectModalProvider'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { HeroSection } from './components/sections/HeroSection'
import { AboutSection } from './components/sections/AboutSection'
import { SkillsSection } from './components/sections/SkillsSection'
import { FeaturedWorkSection } from './components/sections/FeaturedWorkSection'
import { ContentStrategySection } from './components/sections/ContentStrategySection'
import { AnalyticsSection } from './components/sections/AnalyticsSection'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { MomentsSection } from './components/sections/MomentsSection'
import { ToolsSection } from './components/sections/ToolsSection'
import { ServicesSection } from './components/sections/ServicesSection'
import { ContactSection } from './components/sections/ContactSection'
import { CaseStudyModal } from './components/portfolio/CaseStudyModal'

export default function App() {
  return (
    <ContactProvider>
      <ProjectModalProvider>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-violet focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <FeaturedWorkSection />
          <ContentStrategySection />
          <AnalyticsSection />
          <ExperienceSection />
          <MomentsSection />
          <ToolsSection />
          <ServicesSection />
          <ContactSection />
        </main>
        <Footer />
        <CaseStudyModal />
      </ProjectModalProvider>
    </ContactProvider>
  )
}
