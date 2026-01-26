import React from 'react';
import type { Education } from '../types/resume';
import { Section } from './Section';

interface EducationSectionProps {
  education: Education[];
}

export const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  return (
    <Section title="Education">
      <ul className="achievement-list">
        {education.map((edu, index) => (
          <li key={index} className="achievement-item">
            {edu.institution} {edu.degree && `— ${edu.degree}`} {edu.field && `in ${edu.field}`} {edu.honors}
            {edu.graduationDate && ` (${edu.graduationDate})`}
          </li>
        ))}
      </ul>
    </Section>
  );
};
