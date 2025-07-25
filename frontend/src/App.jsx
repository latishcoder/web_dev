import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import HeroGradient from "./components/HeroSection/HeroGradient";
import HeroMain from "./components/HeroSection/HeroMain";
import NavbarMain from "./components/Navbar/NavbarMain";
import SubHeroMain from "./components/subHeroSection/SubHeroMain";


function App() {
  return(
   <div className="font-body">
     <NavbarMain />
    <HeroMain />
    <HeroGradient />
    <SubHeroMain />
    <AboutMeMain />
   </div>
  )
}

export default App