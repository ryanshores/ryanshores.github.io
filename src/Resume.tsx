import './Resume.css'
import {Header} from "./components/Header.tsx";
import {Socials} from "./components/Socials.tsx";
import {Projects} from "./components/Projects.tsx";
import {Skills} from "./components/Skills.tsx";
import {Info} from "./components/Info.tsx";
import {Employment} from "./components/Employment.tsx";
import {Internships} from "./components/Internships.tsx";
import {Education} from "./components/Education.tsx";
import {Profile} from "./components/Profile.tsx";

function Resume() {
  return(
    <>
      <Header />
      <main>
        <aside>
          <Info />
          <Socials />
          <Projects />
          <Skills />
        </aside>
        <section>
          <Profile />
          <Employment />
          <Internships />
          <Education />
          {/*<Courses />*/}
          {/*<References />*/}
        </section>
      </main>
    </>
  )
}

export default Resume;
