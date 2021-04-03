import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ChapterService } from '../../shared/backend/service/chapter-service';
import { Chapter } from '../../shared/model/chapter';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.page.html',
  styleUrls: ['./reader.page.scss'],
})
export class ReaderPage implements OnInit {
  chapter: Chapter;

  constructor(
    private route: ActivatedRoute,
    private chapterService: ChapterService,
    private loadingController: LoadingController,
    private router: Router) { }

  ngOnInit() {
    let loader: HTMLIonLoadingElement;
    this.loadingController.create({
      message: 'Please wait...'
    }).then(elem => {
      loader = elem;
      return elem.present();
    }).then(() => {
      this.route.params.subscribe(params => {
        this.chapterService.LoadChapter(params.novelId, params.chapterId)
          .subscribe(data => {
            this.chapter = data;
            loader.dismiss();
          }
          );
      });
    });
  }

  openChapter(chapterId: string) {
    this.router.navigate(['/reader', this.chapter.novelId, chapterId]);
  }

  swipeEvent(event: any) {
    console.log('do');
  }
}
