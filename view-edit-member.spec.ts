import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditMember } from './view-edit-member';

describe('ViewEditMember', () => {
  let component: ViewEditMember;
  let fixture: ComponentFixture<ViewEditMember>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewEditMember],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewEditMember);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
