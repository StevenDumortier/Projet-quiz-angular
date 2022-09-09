import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRankingGamersComponent } from './page-ranking-gamers.component';

describe('PageRankingGamersComponent', () => {
  let component: PageRankingGamersComponent;
  let fixture: ComponentFixture<PageRankingGamersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageRankingGamersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRankingGamersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
