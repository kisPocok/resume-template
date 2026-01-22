import React from 'react';
import { Section } from './Section';

interface AwardsSectionProps {
  awards: string[];
}

export const AwardsSection: React.FC<AwardsSectionProps> = ({ awards }) => {
  return (
    <Section title="Awards & Recognition">
        <div className="passion-project-description">
          {awards[0]}
        </div>
    </Section>
  );
};
