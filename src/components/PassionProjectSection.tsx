import React from 'react';
import type { PassionProject } from '../types/resume';
import { Section } from './Section';

interface PassionProjectSectionProps {
  passionProject: PassionProject;
}

export const PassionProjectSection: React.FC<PassionProjectSectionProps> = ({ passionProject }) => {
  return (
    <Section title="Passion Project">
      <div className="passion-project">
        <div className="passion-project-title">{passionProject.url ? (
          <a href={passionProject.url} target="_blank" rel="noopener noreferrer" className="link">
            {passionProject.title }
          </a>
          ) : (
            passionProject.title
          )}
        </div>
        <div className="passion-project-description" dangerouslySetInnerHTML={{ __html: passionProject.description }}></div>
      </div>
    </Section>
  );
};
