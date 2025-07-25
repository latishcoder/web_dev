import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import ContactMeMain from "./components/contactSection/ContactMeMain";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import FooterMain from "./components/footer/FooterMain";
import HelperSection from "./components/HelperSection";
import HeroGradient from "./components/HeroSection/HeroGradient";
import HeroMain from "./components/HeroSection/HeroMain";
import NavbarMain from "./components/Navbar/NavbarMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import SkillsMain from "./components/skillSection/SkillsMain";
import SubSkills from "./components/skillSection/SubSkills";
import SubHeroMain from "./components/subHeroSection/SubHeroMain";


function App() {
  return(
   <div className="font-body">
    <NavbarMain />
    <HeroMain />
    <HeroGradient />
    <SubHeroMain />
    <AboutMeMain />
    <SkillsMain />
    <SubSkills />
    <ExperienceMain />
    <ProjectsMain />
    <ContactMeMain />
    <FooterMain />
    <HelperSection />
   </div>
  )
}

export default App