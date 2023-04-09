import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuExtratoComponent } from './menu-extrato.component';

describe('MenuExtratoComponent', () => {
  let component: MenuExtratoComponent;
  let fixture: ComponentFixture<MenuExtratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuExtratoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuExtratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
