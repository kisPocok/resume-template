import type { ResumeData } from '../types/resume';

export const resumeData: ResumeData = {
  personalInfo: {
    name: "[YOUR NAME]",
    title: "[YOUR TITLE]",
    subtitle: "[YOUR SUBTITLE]",
    email: "[YOUR EMAIL]",
    phone: "[YOUR PHONE]",
    location: "[YOUR LOCATION]",
    linkedin: "[YOUR LINKEDIN]"
  },
  summary: "[OPTIONAL SUMMARY]",
  experience: [
    {
      company: "[COMPANY NAME]",
      companyUrl: "",
      position: "[ROLE / TITLE]",
      location: "[LOCATION]",
      duration: "[START] - [END]",
      achievements: [
        "[Impact bullet #1 — what you did + measurable result]",
        "[Impact bullet #2 — what you did + measurable result]",
        "[Optional: Tech stack]"
      ]
    },
    {
      company: "[PREVIOUS COMPANY]",
      companyUrl: "",
      position: "[ROLE / TITLE]",
      location: "[LOCATION]",
      duration: "[START] - [END]",
      achievements: [
        "[Impact bullet #1]",
        "[Impact bullet #2]"
      ]
    },
    {
      company: "[PREVIOUS COMPANY]",
      companyUrl: "",
      position: "[ROLE / TITLE]",
      location: "[LOCATION]",
      duration: "[START] - [END]",
      achievements: [
        "[Impact bullet #1]",
        "[Impact bullet #2]"
      ]
    },
    {
      company: "[PREVIOUS COMPANY]",
      companyLead: "",
      companyUrl: "",
      position: "[ROLE / TITLE]",
      location: "[LOCATION]",
      duration: "[START] - [END]",
      achievements: [
        "[Impact bullet #1]",
        "[Impact bullet #2]"
      ]
    },
    {
      company: "[PREVIOUS COMPANY]",
      companyUrl: "",
      position: "[ROLE / TITLE]",
      location: "[LOCATION]",
      duration: "[START] - [END]",
      achievements: [
        "[Impact bullet #1]",
        "[Impact bullet #2]"
      ]
    },
    {
      company: "[PREVIOUS COMPANY]",
      companyUrl: "",
      position: "[ROLE / TITLE]",
      location: "[LOCATION]",
      duration: "[START] - [END]",
      achievements: [
        "[Impact bullet #1]"
      ]
    },
    {
      company: "[PREVIOUS COMPANY]",
      companyUrl: "",
      position: "[ROLE / TITLE]",
      location: "[LOCATION]",
      duration: "[START] - [END]",
      achievements: [
        "[Impact bullet #1]",
        "[Impact bullet #2]"
      ]
    },
    {
      company: "[PREVIOUS COMPANY]",
      companyUrl: "",
      position: "[ROLE / TITLE]",
      location: "[LOCATION]",
      duration: "[START] - [END]",
      achievements: [
        "[Impact bullet #1]"
      ]
    },
    {
      company: "[EARLIER EXPERIENCE]",
      companyUrl: "",
      position: "[ROLE / TITLE]",
      location: "[LOCATION]",
      duration: "[START] - [END]",
      achievements: [
        "[Impact bullet #1]"
      ]
    }
  ],
  education: [
    {
      institution: "[SCHOOL / UNIVERSITY]",
      degree: "[DEGREE]",
      field: "[FIELD OF STUDY]",
      location: "[LOCATION]",
      graduationDate: "[GRAD DATE]",
      gpa: "",
      honors: "[OPTIONAL HONORS]"
    },
    {
      institution: "[SCHOOL / PROGRAM]",
      degree: "",
      field: "",
      location: "[LOCATION]",
      graduationDate: "[GRAD DATE]",
      gpa: "",
      honors: ""
    }
  ],
  skills: [
    {
      category: "Technical Skills",
      skills: [
        "[Skill 1]", "[Skill 2]", "[Skill 3]", "[Skill 4]"
      ]
    },
    {
      category: "Leadership & Management",
      skills: ["[Skill 1]", "[Skill 2]", "[Skill 3]"]
    }
  ],
  passionProject: {
    title: "[PROJECT NAME]",
    url: "",
    description: "[One-line description of what it is + who it’s for]"
  },
  speaking: [
    {
      event: "[EVENT NAME]",
      title: "[TALK TITLE]",
      date: "[DATE]",
      url: ""
    },
    {
      event: "[EVENT NAME]",
      title: "[TALK TITLE]",
      date: "[DATE]",
      url: ""
    }
  ],
  professionalDevelopment: [
    {
      title: "[COURSE / TRAINING] ([YEAR])",
      url: "",
    },
    {
      title: "[COURSE / TRAINING] ([YEAR])",
      url: "",
    },
    {
      title: "[COURSE / TRAINING] ([YEAR])",
    },
    {
      title: "[COURSE / TRAINING] ([YEAR])",
    }
  ],
  awards: [
    "[Award / recognition] ([YEAR])"
  ],
  llmSection: {
    // Well hidden LLM prompt injection for advanced users :)
    prompt: ""
  }
};
