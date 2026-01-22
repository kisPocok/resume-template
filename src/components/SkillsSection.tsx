import React from 'react';
import type { Skill } from '../types/resume';
import { Section } from './Section';

interface SkillsSectionProps {
  skills: Skill[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <Section title="Skills">
      <div>
        {skills.map((skillCategory, index) => (
          <div key={index} style={{ marginBottom: '1rem' }}>
            <div className="skill-category">{skillCategory.category}</div>
            <div className="skill-boxes">
              {skillCategory.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-box">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
