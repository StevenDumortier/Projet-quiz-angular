import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePlayersGestionAdminComponent } from './page-players-gestion-admin.component';

describe('PagePlayersGestionAdminComponent', () => {
  let component: PagePlayersGestionAdminComponent;
  let fixture: ComponentFixture<PagePlayersGestionAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePlayersGestionAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePlayersGestionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
