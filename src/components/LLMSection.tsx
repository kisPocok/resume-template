import React from 'react';
import type { LLMSection as LLMSectionType } from '../types/resume';

interface LLMSectionProps {
  llmSection: LLMSectionType;
}

export const LLMSection: React.FC<LLMSectionProps> = ({ llmSection }) => {
  return (
    <section className="llm-only">
      {llmSection.prompt}
    </section>
  );
};

