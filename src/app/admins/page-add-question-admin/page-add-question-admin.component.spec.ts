import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddQuestionAdminComponent } from './page-add-question-admin.component';

describe('PageAddQuestionAdminComponent', () => {
  let component: PageAddQuestionAdminComponent;
  let fixture: ComponentFixture<PageAddQuestionAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddQuestionAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAddQuestionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
