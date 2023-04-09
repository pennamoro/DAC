import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCheckHeaderComponent } from './user-check-header.component';

describe('UserCheckHeaderComponent', () => {
  let component: UserCheckHeaderComponent;
  let fixture: ComponentFixture<UserCheckHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCheckHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCheckHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
