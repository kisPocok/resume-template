import type { RecipientInfo } from '../types/coverLetter';

interface CoverLetterRecipientProps {
  recipient: RecipientInfo;
}

export function CoverLetterRecipient({ recipient }: CoverLetterRecipientProps) {
  return (
    <div className="letter-recipient">
      <div className="recipient-name">{recipient.name}</div>
      <div className="recipient-title">{recipient.title}</div>
      <div className="recipient-company">{recipient.company}</div>
      <div className="recipient-address">{recipient.address}</div>
    </div>
  );
}
