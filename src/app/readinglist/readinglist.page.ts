import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Novel } from 'src/shared/model/Novel';
import { AuthenticationService } from 'src/shared/auth/authentication-service';
import { UserService } from '../../shared/backend/service/user-service';

@Component({
  selector: 'app-readinglist',
  templateUrl: './readinglist.page.html',
  styleUrls: ['./readinglist.page.scss'],
})
export class ReadinglistPage implements OnInit {

  novels: Array<Novel>;
  isLogged = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthenticationService,
  ) { }

  ngOnInit() {
    
    this.getData();
  }

  private getData() {
    this.isLogged = this.authService.isLoggedIn;
    if (this.isLogged) {
      this.userService.LoadUserNovels(this.authService.userUid)
        .subscribe(data => this.novels = data);
    }
  }

  openChapterList(novel: Novel) {
    this.router.navigate(['/novelChapters', novel.novelId]);
  }

  openChapter(novel: Novel) {
    this.router.navigate(['/reader', novel.novelId, novel.lastChapterId]);
  }

}
