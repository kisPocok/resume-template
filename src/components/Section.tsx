import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ title, children, className = '' }) => {
  return (
    <section className={className}>
      <h2 className="section-heading">
        {title}
      </h2>
      {children}
    </section>
  );
};
