import { NovelCover } from './novelcover';

export interface Novel {
  novelId: string;
  title: string;
  description: string;
  cover: NovelCover;
  lastChapterId: string;
  lastChapterTitle: string;
}
