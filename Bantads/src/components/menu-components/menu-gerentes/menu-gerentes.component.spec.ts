import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuGerentesComponent } from './menu-gerentes.component';

describe('MenuGerentesComponent', () => {
  let component: MenuGerentesComponent;
  let fixture: ComponentFixture<MenuGerentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuGerentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuGerentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
