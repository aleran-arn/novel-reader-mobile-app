import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NovelService } from 'src/shared/backend/service/novel-service';
import {Novel} from "../../shared/model/Novel";

@Component({
  selector: 'app-last-novels',
  templateUrl: './last-novels.page.html',
  styleUrls: ['./last-novels.page.scss'],
})
export class LastNovelsPage implements OnInit {

  lastNovels: Array<Novel>;
  lastChapterUpdate: number;
  limit = 10;

  constructor(
    private novelService: NovelService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.lastChapterUpdate = Date.now();
    this.novelService.LoadLastNovels(this.lastChapterUpdate, this.limit)
      .subscribe(data => this.lastNovels = data);
  }

  openChapter(novel: Novel) {
    this.router.navigate(['/reader', novel.novelId, novel.lastChapterId]);
  }
}
