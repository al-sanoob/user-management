import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailModal } from './user-detail-modal';

describe('UserDetailModal', () => {
  let component: UserDetailModal;
  let fixture: ComponentFixture<UserDetailModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDetailModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
