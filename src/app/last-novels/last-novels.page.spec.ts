import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LastNovelsPage } from './last-novels.page';

describe('LastNovelsPage', () => {
  let component: LastNovelsPage;
  let fixture: ComponentFixture<LastNovelsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastNovelsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LastNovelsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
