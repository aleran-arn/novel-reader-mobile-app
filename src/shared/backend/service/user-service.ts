import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserNovel } from 'src/shared/model/usernovel';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) { }

  CreateUser(userId: string) {
    const params = {
      params: new HttpParams().set('userId', userId),
    };
    return this.httpClient
      .post(environment.novelBackendConfig.url + '/user/create', params)
      .pipe(map(resp => {
        if (resp['success'] === 'error') {
          throw new Error(resp['error']);
        }
      }));
  }

  LoadUserNovels(userId: string): Observable<UserNovel[]> {
    const params = {
      params: new HttpParams().set('userId', userId),
    };
    return this.httpClient
      .get(environment.novelBackendConfig.url + '/user/novels', params)
      .pipe(map(resp => {
        if (resp['success'] == 'error') {
          throw new Error(resp['error']);
        }
        const novelList = resp['data'];
        return novelList.map(UserService.parseNovel);
      }));
  }

  private static parseNovel(novel: any): UserNovel {
    return {
      novelId: novel.novelId, title: novel.title, description: novel.description,
      cover: {type: novel.cover.type, data: novel.cover.data},
      lastReadedChapterId: novel.lastReadedChapterId, lastReadedChapterTitle: novel.lastReadedChapterTitle,
      lastChapterId: novel.lastChapterId, lastChapterTitle: novel.lastChapterTitle
    };
  }
}
