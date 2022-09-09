import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWelcomeGamersComponent } from './page-welcome-gamers.component';

describe('PageWelcomeGamersComponent', () => {
  let component: PageWelcomeGamersComponent;
  let fixture: ComponentFixture<PageWelcomeGamersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageWelcomeGamersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWelcomeGamersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
