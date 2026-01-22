import type { PersonalInfo } from './resume';

export interface RecipientInfo {
  name: string;
  title: string;
  company: string;
  address: string;
}

export interface LetterContent {
  date: string;
  salutation: string;
  bodyParagraphs: string[];
  closing: string;
}

export interface CoverLetterData {
  sender: PersonalInfo;
  recipient: RecipientInfo;
  letter: LetterContent;
}
