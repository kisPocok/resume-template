import type { CoverLetterData } from '../types/coverLetter';

export const coverLetterData: CoverLetterData = {
  sender: {
    name: "[YOUR NAME]",
    title: "[YOUR TITLE]",
    subtitle: "[YOUR SUBTITLE]",
    email: "[YOUR EMAIL]",
    phone: "[YOUR PHONE]",
    location: "[YOUR LOCATION]",
    linkedin: "[YOUR LINKEDIN]"
  },
  recipient: {
    name: "Hiring Manager",
    title: "",
    company: "",
    address: ""
  },
  letter: {
    date: new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    salutation: "Dear Hiring Manager,",
    bodyParagraphs: [
      "First paragraph of the cover letter.",
      "Second paragraph of the cover letter.",
      "Third paragraph of the cover letter.",
    ],
    closing: "Best regards,"
  }
};
