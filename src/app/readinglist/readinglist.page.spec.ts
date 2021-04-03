import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReadinglistPage } from './readinglist.page';

describe('ReadinglistPage', () => {
  let component: ReadinglistPage;
  let fixture: ComponentFixture<ReadinglistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadinglistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReadinglistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
