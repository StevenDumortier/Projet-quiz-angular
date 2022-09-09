import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWelcomeAdminComponent } from './page-welcome-admin.component';

describe('PageWelcomeAdminComponent', () => {
  let component: PageWelcomeAdminComponent;
  let fixture: ComponentFixture<PageWelcomeAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageWelcomeAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWelcomeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
