import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import HelperSection from "./components/HelperSection";
import HeroGradient from "./components/HeroSection/HeroGradient";
import HeroMain from "./components/HeroSection/HeroMain";
import NavbarMain from "./components/Navbar/NavbarMain";
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
    <HelperSection />
   </div>
  )
}

export default App