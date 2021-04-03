import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NovelchaptersPage } from './novelchapters.page';

describe('NovelchaptersPage', () => {
  let component: NovelchaptersPage;
  let fixture: ComponentFixture<NovelchaptersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovelchaptersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NovelchaptersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
