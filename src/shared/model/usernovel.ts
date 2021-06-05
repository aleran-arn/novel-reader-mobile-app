export interface UserNovel {
    novelId: string;
    title: string;
    description: string;
    cover: UserNovelCover;
    lastReadedChapterId: string;
    lastReadedChapterTitle: string;
    lastChapterId: string;
    lastChapterTitle: string;
  }

export interface UserNovelCover {
    type: string,
    data: string
}