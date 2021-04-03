import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Chapter } from 'src/shared/model/chapter';

@Injectable({
  providedIn: 'root',
})
export class ChapterService {
  constructor(private httpClient: HttpClient) { }

  LoadChapter(novelId: string, chapterId: string): Observable<Chapter> {
    const params = {
      params: new HttpParams().set('novelId', novelId).set('chapterId', chapterId),
    };
    return this.httpClient
      .get(environment.novelBackendConfig.url + '/chapter', params)
      .pipe(map(resp => {
        if (resp['status'] === 'error') {
          throw new Error(resp['message']);
        }
        const chapter = resp['data'];
        return this.parseChapter(chapter);
      }));
  }

  private parseChapter(chapter: any): Chapter {
    return {
      novelId: chapter.novelId, chapterId: chapter.chapterId, title: chapter.title,
      prevChapterId: chapter.prevChapterId, nextChapterId: chapter.nextChapterId,
      contents: this.parseContent(chapter.content)
    };
  }

  private parseContent(content: string): string[] {
    const result = [];
    for (const row of content.split('\n')) {
      if (row.trim() !== '') {
        result.push(row);
      }
    }
    return result;
  }
}
