import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaGerenteComponent } from './consulta-gerente.component';

describe('ConsultaGerenteComponent', () => {
  let component: ConsultaGerenteComponent;
  let fixture: ComponentFixture<ConsultaGerenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaGerenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
