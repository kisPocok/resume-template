export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  github?: string;
}

export interface Experience {
  company: string;
  companyUrl: string;
  companyLead?: string;
  position: string;
  location: string;
  duration: string;
  achievements: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  location: string;
  graduationDate: string;
  gpa?: string;
  honors?: string;
}

export interface Skill {
  category: string;
  skills: string[];
}

export interface PassionProject {
  title: string;
  url?: string;
  description: string;
}

export interface Speaking {
  event: string;
  title: string;
  date: string;
  url?: string;
}

export interface Training {
  title: string;
  url?: string;
}

export interface LLMSection {
  prompt: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  passionProject: PassionProject;
  speaking: Speaking[];
  professionalDevelopment: Training[];
  awards: string[];
  llmSection: LLMSection;
}
