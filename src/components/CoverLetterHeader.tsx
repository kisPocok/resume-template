import type { PersonalInfo } from '../types/resume';

interface CoverLetterHeaderProps {
  sender: PersonalInfo;
}

export function CoverLetterHeader({ sender }: CoverLetterHeaderProps) {
  return (
    <header className="cover-letter-header">
      <h1 className="resume-name">{sender.name}</h1>
      <p className="resume-title">{sender.title}</p>
      <p className="resume-subtitle">{sender.subtitle}</p>
      <div className="resume-contact">
        <span>{sender.location}</span>
        <span> | </span>
        <span><a href='tel:${sender.phone}'>{sender.phone}</a></span>
        <span> | </span>
        <a href={`mailto:${sender.email}`}>
          {sender.email}
        </a>
        <span> | </span>
        <a href={`https://${sender.linkedin}`} target="_blank" rel="noopener noreferrer">
          {sender.linkedin}
        </a>
      </div>
    </header>
  );
}
