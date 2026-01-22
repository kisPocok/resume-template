import React from 'react';
import { Section } from './Section';
import type { Training } from '../types/resume';

interface ProfessionalDevelopmentSectionProps {
  professionalDevelopment: Training[];
}

export const ProfessionalDevelopmentSection: React.FC<ProfessionalDevelopmentSectionProps> = ({ professionalDevelopment }) => {
  return (
    <Section title="Professional Development">
      <ul className="achievement-list">
        {professionalDevelopment.map((item, index) => (
          <li key={index} className="achievement-item">
            {item.url ? (
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="link">
                {item.title}
              </a>
            ) : (
              item.title
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
};
