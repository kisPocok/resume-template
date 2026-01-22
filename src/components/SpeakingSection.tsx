import React from 'react';
import type { Speaking } from '../types/resume';
import { Section } from './Section';

interface SpeakingSectionProps {
  speaking: Speaking[];
}

export const SpeakingSection: React.FC<SpeakingSectionProps> = ({ speaking }) => {
  return (
    <Section title="Speaking & Presentations">
      <ul className="achievement-list">
        {speaking.map((item, index) => (
          <li key={index} className="achievement-item">
            Speaker — {item.event}, "{item.url ? (
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="link">
                {item.title}
              </a>
            ) : (
              item.title
            )}" ({item.date})
          </li>
        ))}
      </ul>
    </Section>
  );
};
