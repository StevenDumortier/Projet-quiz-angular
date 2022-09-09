import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGameGamersComponent } from './page-game-gamers.component';

describe('PageGameGamersComponent', () => {
  let component: PageGameGamersComponent;
  let fixture: ComponentFixture<PageGameGamersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageGameGamersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGameGamersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
