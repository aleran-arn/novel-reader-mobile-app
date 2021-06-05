import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Novel } from 'src/shared/model/Novel';

@Injectable({
  providedIn: 'root',
})
export class NovelService {
  constructor(private httpClient: HttpClient) { }

  LoadLastNovels(lastChapterUpdate: number, limit: number): Observable<Novel[]> {
    const params = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json; charset=UTF-8'
      }),
      params: new HttpParams().set('lastChapterUpdate', lastChapterUpdate.toString()).set('limit', limit.toString()),
    };
    return this.httpClient
      .get(environment.novelBackendConfig.url + '/novels', params)
      .pipe(map(resp => {
        if (resp['success'] == 'error') {
          throw new Error(resp['error']);
        }
        const novelList = resp['data'];
        return novelList.map(this.parseNovel);
      }));
  }

  private parseNovel(novel: any): Novel {
    return {
        novelId: novel.novelId, title: novel.title, description: novel.description, cover: { type: novel.coverImage.contentType, data: novel.coverImage.data },
        lastChapterId: novel.lastChapterId, lastChapterTitle: novel.lastChapterTitle
    };
  }
}
