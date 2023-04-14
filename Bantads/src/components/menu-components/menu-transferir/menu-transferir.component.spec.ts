import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTransferirComponent } from './menu-transferir.component';

describe('MenuTransferirComponent', () => {
  let component: MenuTransferirComponent;
  let fixture: ComponentFixture<MenuTransferirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuTransferirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuTransferirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
