import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialAdminComponent } from './inicial-admin.component';

describe('InicialAdminComponent', () => {
  let component: InicialAdminComponent;
  let fixture: ComponentFixture<InicialAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicialAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicialAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
