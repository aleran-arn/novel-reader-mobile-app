export interface Novel {
  novelId: string;
  title: string;
  description: string;
  cover: NovelCover;
  lastChapterId: string;
  lastChapterTitle: string;
}

export interface NovelCover {
  type: string,
  data: string
}
