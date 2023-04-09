import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSaqueComponent } from './menu-saque.component';

describe('MenuSaqueComponent', () => {
  let component: MenuSaqueComponent;
  let fixture: ComponentFixture<MenuSaqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSaqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
