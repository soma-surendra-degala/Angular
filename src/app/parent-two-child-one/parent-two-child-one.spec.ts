import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTwoChildOne } from './parent-two-child-one';

describe('ParentTwoChildOne', () => {
  let component: ParentTwoChildOne;
  let fixture: ComponentFixture<ParentTwoChildOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentTwoChildOne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentTwoChildOne);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
