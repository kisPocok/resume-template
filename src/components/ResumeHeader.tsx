import React from 'react';
import type { PersonalInfo } from '../types/resume';

interface ResumeHeaderProps {
  personalInfo: PersonalInfo;
}

export const ResumeHeader: React.FC<ResumeHeaderProps> = ({ personalInfo }) => {
  return (
    <header>
      <h1 className="resume-name">{personalInfo.name}</h1>
      <p className="resume-title">{personalInfo.title}</p>
      <p className="resume-subtitle">{personalInfo.subtitle}</p>
      <div className="resume-contact">
        <span>{personalInfo.location}</span>
        <span> | </span>
        <span><a href='tel:${personalInfo.phone}'>{personalInfo.phone}</a></span>
        <span> | </span>
        <a href={`mailto:${personalInfo.email}`}>
          {personalInfo.email}
        </a>
        <span> | </span>
        <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">
          {personalInfo.linkedin}
        </a>
      </div>
    </header>
  );
};
