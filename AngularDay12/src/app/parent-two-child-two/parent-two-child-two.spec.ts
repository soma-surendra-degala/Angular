import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTwoChildTwo } from './parent-two-child-two';

describe('ParentTwoChildTwo', () => {
  let component: ParentTwoChildTwo;
  let fixture: ComponentFixture<ParentTwoChildTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentTwoChildTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentTwoChildTwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
