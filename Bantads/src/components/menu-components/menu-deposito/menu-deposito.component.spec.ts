import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDepositoComponent } from './menu-deposito.component';

describe('MenuDepositoComponent', () => {
  let component: MenuDepositoComponent;
  let fixture: ComponentFixture<MenuDepositoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDepositoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuDepositoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
