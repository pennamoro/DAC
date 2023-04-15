import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuConfiguracaoComponent } from './menu-configuracao.component';

describe('MenuConfiguracaoComponent', () => {
  let component: MenuConfiguracaoComponent;
  let fixture: ComponentFixture<MenuConfiguracaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuConfiguracaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuConfiguracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
