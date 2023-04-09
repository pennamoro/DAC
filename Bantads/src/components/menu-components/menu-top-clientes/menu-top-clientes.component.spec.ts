import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTopClientesComponent } from './menu-top-clientes.component';

describe('MenuTopClientesComponent', () => {
  let component: MenuTopClientesComponent;
  let fixture: ComponentFixture<MenuTopClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuTopClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuTopClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
