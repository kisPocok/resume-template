import { coverLetterData } from './data/coverLetter';
import { CoverLetterHeader } from './components/CoverLetterHeader';
import { CoverLetterBody } from './components/CoverLetterBody';

function CoverLetterApp() {
  return (
    <div style={{ minHeight: '100vh', padding: '2rem 1rem' }}>
      <div className="cover-letter-container">
        <CoverLetterHeader sender={coverLetterData.sender} />
        <CoverLetterBody letter={coverLetterData.letter} />
      </div>
    </div>
  );
}

export default CoverLetterApp;
