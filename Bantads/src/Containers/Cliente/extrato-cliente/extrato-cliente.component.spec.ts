import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtratoClienteComponent } from './extrato-cliente.component';

describe('ExtratoClienteComponent', () => {
  let component: ExtratoClienteComponent;
  let fixture: ComponentFixture<ExtratoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtratoClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtratoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
