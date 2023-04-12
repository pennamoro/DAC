import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositoClienteComponent } from './deposito-cliente.component';

describe('DepositoClienteComponent', () => {
  let component: DepositoClienteComponent;
  let fixture: ComponentFixture<DepositoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositoClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
