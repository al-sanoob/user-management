import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementHome } from './user-management-home';

describe('UserManagementHome', () => {
  let component: UserManagementHome;
  let fixture: ComponentFixture<UserManagementHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserManagementHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserManagementHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
