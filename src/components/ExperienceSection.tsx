import React from 'react';
import type { Experience } from '../types/resume';
import { Section } from './Section';

interface ExperienceSectionProps {
  experience: Experience[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience }) => {
  return (
    <Section title="Work Experience">
      <div>
        {experience.map((job, index) => (
          <div key={index} className="experience-item">
            {job.company && (
              job.companyUrl ? (
                <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="company-name">
                  {job.company}
                </a>
              ) : (
                <div className="company-name">{job.company}</div>
              )
            )}
            {job.companyLead && (
              <div className="job-title job-company-lead">
                {job.companyLead}
              </div>
            )}
            <div className="job-title">
              {job.position} | {job.duration} {job.location ? `| ${job.location}` : ''}
            </div>

            {job.achievements.length > 0 && (
              <ul className="achievement-list">
                {job.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex} className="achievement-item">
                    {achievement}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};
