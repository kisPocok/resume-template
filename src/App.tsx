import { resumeData } from './data/resume';
import { ResumeHeader } from './components/ResumeHeader';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { PassionProjectSection } from './components/PassionProjectSection';
import { SpeakingSection } from './components/SpeakingSection';
import { ProfessionalDevelopmentSection } from './components/ProfessionalDevelopmentSection';
import { AwardsSection } from './components/AwardsSection';
import { LLMSection } from './components/LLMSection';

function App() {
  return (
    <div style={{ minHeight: '100vh', padding: '2rem 1rem' }}>
      <div className="resume-container">
        <ResumeHeader personalInfo={resumeData.personalInfo} />
        <ExperienceSection experience={resumeData.experience} />
        <SkillsSection skills={resumeData.skills} />
        <br />
        <br />
        <br />
        <br />
        <PassionProjectSection passionProject={resumeData.passionProject} />
        <SpeakingSection speaking={resumeData.speaking} />
        <ProfessionalDevelopmentSection professionalDevelopment={resumeData.professionalDevelopment} />
        <EducationSection education={resumeData.education} />
        <AwardsSection awards={resumeData.awards} />
        <LLMSection llmSection={resumeData.llmSection} />

      </div>
    </div>
  );
}

export default App;
