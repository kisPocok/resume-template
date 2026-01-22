import type { LetterContent } from '../types/coverLetter';

interface CoverLetterBodyProps {
  letter: LetterContent;
}

export function CoverLetterBody({ letter }: CoverLetterBodyProps) {
  return (
    <div className="letter-content">
      <div className="letter-date">{letter.date}</div>

      <div className="letter-salutation">{letter.salutation}</div>

      <div className="letter-body">
        {letter.bodyParagraphs.map((paragraph, index) => (
          <p key={index} className="letter-paragraph">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="letter-closing">
        <p>{letter.closing}</p>
        <p className="signature-name">[YOUR NAME]</p>
      </div>
    </div>
  );
}
